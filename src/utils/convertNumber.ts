import { validateNumber } from "./validateNumber";

export function convertNumber(
  value: string,
  fromBase: number,
  toBase: number,
): string {
  const validationError = validateNumber(value, fromBase);

  if (validationError) {
    throw new Error(validationError);
  }

  const decimalValue = parseInt(value, fromBase);

  return decimalValue.toString(toBase).toUpperCase();
}
