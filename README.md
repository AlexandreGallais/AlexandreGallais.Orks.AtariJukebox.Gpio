# AlexandreGallais.Orks.AtariJukebox.Gpio

Package related to [AlexandreGallais.Orks.AtariJukebox](https://github.com/AlexandreGallais/AlexandreGallais.Orks.AtariJukebox) that allow easy control over the Raspberry Pi GPIO bus.\
With this package you can subscribe to keypad events and set/change chars of the display.

## GPIO BUS

![GPIO Bus Explanation](./documentation/AtariJukebox.GPIO.jpg)

## Installation

### Install the pigpio C library

<https://abyz.me.uk/rpi/pigpio/download.html>

```bash
wget https://github.com/joan2937/pigpio/archive/master.zip
unzip master.zip
cd pigpio-master
make
sudo make install
```

### Install the package

```bash
npm install alexandregallais.orks.atarijukebox.gpio
```

## Usage

🚫 You can only work with one class at the same time, even if they are in different processes. 🚫\
It's a limitation from pigpio but a good one in this case.\
We just want one controller from the jukebox.

### Init

First, you need to initialize the class before using it.

```typescript
import { AtariJukeboxGpio } from 'alexandregallais.orks.atarijukebox.gpio'

const ajgpio = AtariJukeboxGpio;

/** Interval in ms between laps */
const interval = 100;

type type_chars_key = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '';
type type_bit = 0 | 1;

/** Display chars initialization */
const chars: { [key in type_chars_key]: [type_bit, type_bit, type_bit, type_bit, type_bit, type_bit, type_bit] } = {
    '0': [1, 1, 1, 1, 1, 1, 0],
    '1': [0, 1, 1, 0, 0, 0, 0],
    '2': [1, 1, 0, 1, 1, 0, 1],
    '3': [1, 1, 1, 1, 0, 0, 1],
    '4': [0, 1, 1, 0, 0, 1, 1],
    '5': [1, 0, 1, 1, 0, 1, 1],
    '6': [1, 0, 1, 1, 1, 1, 1],
    '7': [1, 1, 1, 0, 0, 0, 0],
    '8': [1, 1, 1, 1, 1, 1, 1],
    '9': [1, 1, 1, 1, 0, 1, 1],
    '' : [0, 0, 0, 0, 0, 0, 0],
};

type type_position_init = { defaultChar: type_chars_key,  disabled: boolean }
type type_positions_init = [type_position_init, type_position_init, type_position_init, type_position_init, type_position_init, type_position_init, type_position_init, type_position_init]

/** Display positions initialization */
const position: type_positions_init = [
    { defaultChar: '',  disabled: false },
    { defaultChar: '',  disabled: false },
    { defaultChar: '0', disabled: false }, // Show the char '0' on the third position.
    { defaultChar: '',  disabled: false },
    { defaultChar: '1', disabled: false }, // Show the char '1' on the fifth position.
    { defaultChar: '',  disabled: true },  // Sixth position is disabled.
    { defaultChar: '',  disabled: true },  // Seventh position is disabled.
    { defaultChar: '',  disabled: true },  // Eighth position is disabled.
];

ajgpio.init(interval, chars, position);
```

### Start

After initialization you need to start the class.

```typescript
// ...Init

ajgpio.start();
```

### Pause

If you want to stop the GPIO bus usage for any reason you can with this.

```typescript
// ...Init
// ...Start

ajgpio.pause();
```

For restarting the class just re-run the start method.

```typescript
// ...Init
// ...Start

ajgpio.pause();

ajgpio.start();
```

### Subscribe to keypad events

You can subscribe to keypad events with a callback function.

It's better but not mandatory to subscribe before starting the class.

```typescript
// ...Init

ajgpio.keypadEvent((key) =>
{
    // key can be: '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | 'hit' | 'reset'
    console.log(key);

    // Do whatever you want.
});

// ...Start
```

### Change display characters

You can change the char of any enabled position after the start of the class.

```typescript
type type_chars_key = '0' | '1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '';
// ...Init

ajgpio.keypadEvent((key) =>
{
    // To avoid errors during your development, set the chars list in the method.
    ajgpio.setChar<type_chars_key>(4, '2');

    // Here I change the fourth display position to '2', every time I click a button on the keypad.
});

// ...Start
```

### Kill

If you want to stop the class you can with the kill method.
Kill the class, set all used GPIOs to a 0v state.

🚫 After killing the class you will need to restart your process to be able to use it again. 🚫

```typescript
// ...Init
// ...Start

ajgpio.kill();
```

## Dependencies

- [pigpio C](https://github.com/joan2937/pigpio)
- [pigpio JS](https://github.com/fivdi/pigpio)
