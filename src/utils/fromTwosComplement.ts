import type { BitWidth } from "./bitWidth";

export function fromTwosComplement(binary: string, bitWidth: BitWidth): bigint {
  if (binary.length !== bitWidth) {
    throw new Error(`Binary value must contain exactly ${bitWidth} bits.`);
  }

  if (!/^[01]+$/.test(binary)) {
    throw new Error("Binary value must contain only 0 and 1.");
  }

  const unsignedValue = BigInt(`0b${binary}`);

  if (binary[0] === "0") {
    return unsignedValue;
  }

  return unsignedValue - 2n ** BigInt(bitWidth);
}
