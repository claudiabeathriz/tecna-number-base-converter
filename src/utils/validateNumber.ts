export function validateNumber(value: string, base: number): string | null {
  if (value.trim() === "") {
    return "Enter a number.";
  }

  const patterns: Record<number, RegExp> = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^[0-9]+$/,
    16: /^[0-9a-fA-F]+$/,
  };

  const pattern = patterns[base];

  if (!pattern) {
    return "Unsupported number base.";
  }

  if (!pattern.test(value.trim())) {
    return "Invalid number for this base.";
  }

  return null;
}
