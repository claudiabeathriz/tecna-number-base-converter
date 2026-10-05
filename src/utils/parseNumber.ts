export function parseNumber(value: string, base: number): bigint {
  const trimmedValue = value.trim();

  const isNegative = trimmedValue.startsWith("-");

  const digits = isNegative ? trimmedValue.slice(1) : trimmedValue;

  let decimalValue = 0n;

  for (const character of digits.toUpperCase()) {
    const digit = parseInt(character, base);

    if (Number.isNaN(digit) || digit >= base) {
      throw new Error("Invalid number for this base.");
    }

    decimalValue = decimalValue * BigInt(base) + BigInt(digit);
  }

  return isNegative ? -decimalValue : decimalValue;
}
