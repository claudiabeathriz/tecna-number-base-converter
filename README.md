# Number Base Converter _(if it was made by Tecna from Winx)_

A web-based number base converter built with **React, TypeScript, and Vite**.

The project converts integers between **decimal, binary, octal, and hexadecimal** representations. It also includes support for **Two's Complement**, allowing negative integers to be represented using fixed bit widths such as **8, 16, 32, and 64 bits**.

The project was built not only as a utility, but also as a practical exercise in understanding number systems, binary representation, TypeScript, React state management, validation, and testing.

## Live Demo

**[Try the Number Base Converter](https://tecna-number-base-converter.vercel.app/)**

## Features

* Convert between:

  * Decimal (base 10)
  * Binary (base 2)
  * Octal (base 8)
  * Hexadecimal (base 16)
* Input validation based on the selected number base
* Standard integer representation
* Two's Complement representation for negative integers
* Configurable bit widths:

  * 8 bits
  * 16 bits
  * 32 bits
  * 64 bits
* Swap source and target bases
* Responsive interface
* Unit tests with Vitest
* BigInt-based calculations for Two's Complement

## Tech Stack

* **React**
* **TypeScript**
* **Vite**
* **Vitest**
* **CSS**
* **BigInt**

## How It Works

The converter separates the problem into different responsibilities.

The input is first validated according to its base. For example, a binary number can only contain `0` and `1`, while a hexadecimal number can contain digits from `0` to `9` and letters from `A` to `F`.

For standard conversions, the application converts the input into a decimal representation and then converts that value into the target base.

For Two's Complement, the application uses a fixed bit width to determine how a signed integer should be represented.

For example:

```text
-5

8-bit Two's Complement:
11111011

16-bit Two's Complement:
1111111111111011
```

The same number has different binary representations depending on the selected number of bits.

---

# A Short Lesson on Number Representation

Computers ultimately work with **bits**: values that can be either `0` or `1`.

Because of this, numbers need to be represented using binary.

## Decimal

Decimal is base 10, meaning it uses ten symbols:

```text
0 1 2 3 4 5 6 7 8 9
```

Each position represents a power of 10.

For example:

```text
345

= 3 × 10²
+ 4 × 10¹
+ 5 × 10⁰

= 300 + 40 + 5

= 345
```

## Binary

Binary is base 2 and uses only:

```text
0 1
```

Each position represents a power of 2.

For example:

```text
1010₂

= 1 × 2³
+ 0 × 2²
+ 1 × 2¹
+ 0 × 2⁰

= 8 + 0 + 2 + 0

= 10₁₀
```

Therefore:

```text
1010₂ = 10₁₀
```

## Octal

Octal is base 8:

```text
0 1 2 3 4 5 6 7
```

Each position represents a power of 8.

For example:

```text
10₈ = 1 × 8¹ + 0 × 8⁰
    = 8₁₀
```

## Hexadecimal

Hexadecimal is base 16.

Because there are only ten decimal digits, the system also uses letters:

```text
0 1 2 3 4 5 6 7 8 9 A B C D E F
```

The letters represent:

```text
A = 10
B = 11
C = 12
D = 13
E = 14
F = 15
```

For example:

```text
FF₁₆

= 15 × 16¹
+ 15 × 16⁰

= 240 + 15

= 255₁₀
```

---

# Signed Numbers and Two's Complement

Representing positive numbers in binary is straightforward.

For example:

```text
5₁₀ = 00000101₂
```

But how does a computer represent `-5`?

One common method is **Two's Complement**.

Two's Complement allows the same sequence of bits to represent both positive and negative integers.

For an `n`-bit signed integer, the range is:

```text
-2ⁿ⁻¹ to 2ⁿ⁻¹ - 1
```

Therefore:

| Bit width |        Minimum |       Maximum |
| --------- | -------------: | ------------: |
| 8 bits    |           -128 |           127 |
| 16 bits   |        -32,768 |        32,767 |
| 32 bits   | -2,147,483,648 | 2,147,483,647 |
| 64 bits   |           -2⁶³ |       2⁶³ - 1 |

## How -5 becomes 11111011

Using 8 bits, start with the positive value:

```text
5 = 00000101
```

Invert every bit:

```text
11111010
```

Then add 1:

```text
11111010
       +1
--------
11111011
```

Therefore:

```text
-5 = 11111011
```

in 8-bit Two's Complement.

Another way to understand the same result is:

```text
2⁸ + (-5)
= 256 - 5
= 251
```

And:

```text
251₁₀ = 11111011₂
```

Both approaches produce the same representation.

## Why Does Bit Width Matter?

Two's Complement is a **fixed-width representation**.

The value `-5` is therefore represented differently depending on the number of available bits:

```text
8 bits:
11111011

16 bits:
1111111111111011

32 bits:
11111111111111111111111111111011
```

The additional bits are filled with `1`s because negative values use **sign extension**.

This is why the converter allows the user to select the desired bit width.

---

# Project Structure

```text
src/
├── components/
│   ├── BaseSelector.tsx
│   └── NumberInput.tsx
│
├── utils/
│   ├── bitWidth.ts
│   ├── convertNumber.ts
│   ├── convertNumber.test.ts
│   ├── fromTwosComplement.ts
│   ├── fromTwosComplement.test.ts
│   ├── parseNumber.ts
│   ├── twosComplement.ts
│   ├── twosComplement.test.ts
│   ├── validateNumber.ts
│   └── validateNumber.test.ts
│
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

The `utils` folder contains the core conversion logic, while the React components are responsible for the user interface.

## Testing

The project uses **Vitest** for unit testing.

Tests cover:

* Number validation
* Base conversion
* Positive numbers
* Negative numbers
* Two's Complement conversion
* Different bit widths
* Minimum and maximum values for a given bit width
* Invalid inputs

Run the tests with:

```bash
npm test
```

## Running Locally

Clone the repository and install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

To create a production build:

```bash
npm run build
```

## What I Learned

This project was built as a practical exercise in understanding how numbers are represented and manipulated at a lower level.

Some of the main concepts explored were:

* Number bases
* Binary representation
* Signed integers
* Two's Complement
* Fixed-width integer ranges
* BigInt in JavaScript/TypeScript
* Input validation
* React state management
* Component-based UI design
* Unit testing with Vitest
* TypeScript type safety

The goal was not just to build a working converter, but to understand the concepts behind the operations performed by the application.

---

## Live Application

**https://tecna-number-base-converter.vercel.app/**
