/* eslint-disable @typescript-eslint/no-magic-numbers */
type type_bit = 0 | 1;
type type_key_indexes = 0 | 1 | 2 | 3;
type type_char_value = [type_bit, type_bit, type_bit, type_bit, type_bit, type_bit, type_bit];

import * as pigpio from 'pigpio';
import { Gpio } from 'pigpio';

export class AtariJukeboxGpio
{
    static #interval = 100;

    static #chars: { [key: string]: type_char_value | undefined } = {};

    static #segments = [
        new Gpio(16, { mode: Gpio.OUTPUT }),
        new Gpio(12, { mode: Gpio.OUTPUT }),
        new Gpio(25, { mode: Gpio.OUTPUT }),
        new Gpio(8, { mode: Gpio.OUTPUT }),
        new Gpio(7, { mode: Gpio.OUTPUT }),
        new Gpio(20, { mode: Gpio.OUTPUT }),
        new Gpio(21, { mode: Gpio.OUTPUT }),
    ];

    static #positions = [
        new Gpio(10, { mode: Gpio.OUTPUT }),
        new Gpio(9, { mode: Gpio.OUTPUT }),
        new Gpio(11, { mode: Gpio.OUTPUT }),
        new Gpio(5, { mode: Gpio.OUTPUT }),
        new Gpio(6, { mode: Gpio.OUTPUT }),
        new Gpio(13, { mode: Gpio.OUTPUT }),
        new Gpio(19, { mode: Gpio.OUTPUT }),
        new Gpio(26, { mode: Gpio.OUTPUT }),
    ];

    static #positionsEnabled = [
        0,
        1,
        2,
        3,
        4,
        5,
        6,
        7,
    ];

    static #positionsChar = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ];

    static #positionIndex = -1;

    static #keysIn = [
        new Gpio(2, {
            mode      : Gpio.INPUT,
            pullUpDown: Gpio.PUD_UP,
        }),
        new Gpio(3, {
            mode      : Gpio.INPUT,
            pullUpDown: Gpio.PUD_UP,
        }),
        new Gpio(4, {
            mode      : Gpio.INPUT,
            pullUpDown: Gpio.PUD_UP,
        }),
        new Gpio(17, {
            mode      : Gpio.INPUT,
            pullUpDown: Gpio.PUD_UP,
        }),
    ];

    static #keysOut = [
        new Gpio(14, { mode: Gpio.OUTPUT }),
        new Gpio(15, { mode: Gpio.OUTPUT }),
        new Gpio(18, { mode: Gpio.OUTPUT }),
        new Gpio(23, { mode: Gpio.OUTPUT }),
    ];

    static #keypad = {
        0: {
            0: '9',
            1: 'hit',
            2: '',
            3: '',
        },
        1: {
            0: '6',
            1: '7',
            2: '8',
            3: '',
        },
        2: {
            0: '3',
            1: '4',
            2: '5',
            3: '',
        },
        3: {
            0: '0',
            1: '1',
            2: '2',
            3: 'reset',
        },
    };

    static #key = '';

    static #keyEventStore: ((key: string) => void)[] = [];

    static #run = false;

    static #init = false;

    static #exit = false;

    static #lapDigit = (): void =>
    {
        if (this.#positionIndex >= this.#positionsEnabled.length - 1)
        {
            this.#positionIndex = 0;
        }
        else
        {
            this.#positionIndex += 1;
        }

        this.#positionsEnabled.forEach((index) =>
        {
            this.#positions[index].digitalWrite(1);
        });

        const digitChar = this.#positionsChar[this.#positionsEnabled[this.#positionIndex]];
        const char = this.#chars[digitChar];

        if (char === undefined)
        {
            return;
        }

        this.#segments.forEach((segment, index) =>
        {
            segment.digitalWrite(char[index]);
        });

        this.#positions[this.#positionsEnabled[this.#positionIndex]].digitalWrite(0);
    };

    static #lapKey = (): void =>
    {
        this.#keysOut.forEach((keyOut, keyOutIndex, keysOut) =>
        {
            keysOut.forEach((keysOutBis) =>
            {
                keysOutBis.digitalWrite(1);
            });

            keyOut.digitalWrite(0);

            this.#keysIn.forEach((keyIn, keyInIndex) =>
            {
                const key = this.#keypad[keyOutIndex as type_key_indexes][keyInIndex as type_key_indexes];

                if (keyIn.digitalRead() === 0 && this.#key === '')
                {
                    this.#key = key;
                }

                else if (keyIn.digitalRead() === 1 && this.#key === key && this.#key !== '')
                {
                    this.#keyEventStore.forEach((event) =>
                    {
                        event(this.#key);
                    });

                    this.#key = '';
                }
            });
        });
    };

    static #loop = (): void =>
    {
        if (this.#run)
        {
            this.#lapDigit();
            this.#lapKey();
        }

        if (!this.#exit)
        {
            setTimeout(() =>
            {
                this.#loop();
            }, this.#interval);
        }
    };

    /**
     * Init the class before using it.
     *
     * @param interval
     * The interval in ms between laps of the loop which allows the keypad and display to work.
     *
     * @param chars
     * Set the chars used by the display.
     *
     * @param positions
     * Define the default char of a position and if the position is enabled/disabled during the process.
     */
    public static init = (
        interval: number,
        chars: { [key: string]: [type_bit, type_bit, type_bit, type_bit, type_bit, type_bit, type_bit] },
        positions: [
            { defaultChar?: string; disabled?: boolean },
            { defaultChar?: string; disabled?: boolean },
            { defaultChar?: string; disabled?: boolean },
            { defaultChar?: string; disabled?: boolean },
            { defaultChar?: string; disabled?: boolean },
            { defaultChar?: string; disabled?: boolean },
            { defaultChar?: string; disabled?: boolean },
            { defaultChar?: string; disabled?: boolean },
        ],
    ): void =>
    {
        if (this.#init)
        {
            throw new Error('AtariJukebox is already init.');
        }

        pigpio.initialize();

        this.#positions.forEach((digit) =>
        {
            digit.digitalWrite(0);
        });

        this.#segments.forEach((segment) =>
        {
            segment.digitalWrite(0);
        });

        this.#keysOut.forEach((key) =>
        {
            key.digitalWrite(0);
        });

        this.#interval = interval;

        Object.entries<type_char_value>(chars).forEach(([
            key,
            value,
        ]) =>
        {
            this.#chars[key] = value;
        });

        this.#positionsEnabled = [];

        positions.forEach(({ defaultChar, disabled }, index) =>
        {
            if (disabled !== true)
            {
                this.#positionsEnabled.push(index);
            }
            else
            {
                this.#positions[index].digitalWrite(1);
            }

            if (defaultChar !== undefined)
            {
                this.#positionsChar[index] = defaultChar;
            }
            else
            {
                this.#positionsChar[index] = '';
            }
        });

        this.#init = true;

        this.#loop();
    };

    /**
     * Start the class.
     *
     * @description Start the loop which allows the keypad and display to work.
     */
    public static start = (): void =>
    {
        this.#run = true;
    };

    /**
     * Subscribe to keypad events.
     *
     * @param callbackfn
     * The callback function that subscribes to a keypad event.
     */
    public static keypadEvent = (callbackfn: (key: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'hit' | 'reset') => void): void =>
    {
        this.#keyEventStore.push(callbackfn);
    };

    /**
     * Change display chars.
     *
     * @param position
     * The display positions.
     *
     * @param char
     * A char that is in the class init parameter.
     */
    public static setChar = <type_chars_key extends string>(position: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, char: type_chars_key): void =>
    {
        if (this.#chars[char] === undefined)
        {
            return;
        }

        this.#positionsChar[position] = char;
    };

    /**
     * Pause the loop which allows the keypad and display to work.
     */
    public static pause = (): void =>
    {
        this.#run = false;
    };

    /**
     * Kill the class.
     *
     * @description After killing the class you will need to restart your process to be able to use it again.
     */
    public static kill = (): void =>
    {
        this.#run = false;
        this.#exit = true;

        this.#positions.forEach((digit) =>
        {
            digit.digitalWrite(0);
        });

        this.#segments.forEach((segment) =>
        {
            segment.digitalWrite(0);
        });

        this.#keysOut.forEach((key) =>
        {
            key.digitalWrite(0);
        });

        pigpio.terminate();
    };
}

export default AtariJukeboxGpio;
