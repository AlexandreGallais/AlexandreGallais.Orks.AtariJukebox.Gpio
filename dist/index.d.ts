type type_bit = 0 | 1;
export declare class AtariJukeboxGpio {
    #private;
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
    static init: (interval: number, chars: {
        [key: string]: [type_bit, type_bit, type_bit, type_bit, type_bit, type_bit, type_bit];
    }, positions: [
        {
            defaultChar?: string;
            disabled?: boolean;
        },
        {
            defaultChar?: string;
            disabled?: boolean;
        },
        {
            defaultChar?: string;
            disabled?: boolean;
        },
        {
            defaultChar?: string;
            disabled?: boolean;
        },
        {
            defaultChar?: string;
            disabled?: boolean;
        },
        {
            defaultChar?: string;
            disabled?: boolean;
        },
        {
            defaultChar?: string;
            disabled?: boolean;
        },
        {
            defaultChar?: string;
            disabled?: boolean;
        }
    ]) => void;
    /**
     * Start the class.
     *
     * @description Start the loop which allows the keypad and display to work.
     */
    static start: () => void;
    /**
     * Subscribe to keypad events.
     *
     * @param callbackfn
     * The callback function that subscribes to a keypad event.
     */
    static keypadEvent: (callbackfn: (key: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'hit' | 'reset') => void) => void;
    /**
     * Change display chars.
     *
     * @param position
     * The display positions.
     *
     * @param char
     * A char that is in the class init parameter.
     */
    static setChar: <type_chars_key extends string>(position: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7, char: type_chars_key) => void;
    /**
     * Pause the loop which allows the keypad and display to work.
     */
    static pause: () => void;
    /**
     * Kill the class.
     *
     * @description After killing the class you will need to restart your process to be able to use it again.
     */
    static kill: () => void;
}
export default AtariJukeboxGpio;
