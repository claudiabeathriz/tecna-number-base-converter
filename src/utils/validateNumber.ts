export function validateNumber(value: string, base: number): string | null {
  const trimmedValue = value.trim();

  if (trimmedValue === "") {
    return "Enter a number.";
  }

  const patterns: Record<number, RegExp> = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^-?[0-9]+$/,
    16: /^[0-9a-fA-F]+$/,
  };

  const pattern = patterns[base];

  if (!pattern) {
    return "Unsupported number base.";
  }

  if (!pattern.test(trimmedValue)) {
    return "Invalid number for this base.";
  }

  return null;
}
