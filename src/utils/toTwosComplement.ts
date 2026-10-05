import type { BitWidth } from "./bitWidth";

export function toTwosComplement(value: bigint, bitWidth: BitWidth): string {
  const min = -(2n ** BigInt(bitWidth - 1));
  const max = 2n ** BigInt(bitWidth - 1) - 1n;

  if (value < min || value > max) {
    throw new Error(
      `Value must be between ${min} and ${max} for ${bitWidth} bits.`,
    );
  }

  if (value >= 0n) {
    return value.toString(2).padStart(bitWidth, "0");
  }

  const unsignedValue = 2n ** BigInt(bitWidth) + value;

  return unsignedValue.toString(2).padStart(bitWidth, "0");
}
