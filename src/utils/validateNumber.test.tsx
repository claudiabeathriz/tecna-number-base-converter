import { describe, expect, it } from "vitest";

import { validateNumber } from "./validateNumber";

describe("validateNumber", () => {
  it("accepts valid binary numbers", () => {
    expect(validateNumber("10101", 2)).toBeNull();
  });

  it("rejects invalid binary numbers", () => {
    expect(validateNumber("10201", 2)).toBe("Invalid number for this base.");
  });

  it("accepts valid octal numbers", () => {
    expect(validateNumber("765", 8)).toBeNull();
  });

  it("rejects invalid octal numbers", () => {
    expect(validateNumber("789", 8)).toBe("Invalid number for this base.");
  });

  it("accepts valid decimal numbers", () => {
    expect(validateNumber("12345", 10)).toBeNull();
  });

  it("accepts valid hexadecimal numbers", () => {
    expect(validateNumber("FF12", 16)).toBeNull();
  });

  it("rejects invalid hexadecimal numbers", () => {
    expect(validateNumber("G12", 16)).toBe("Invalid number for this base.");
  });

  it("rejects empty values", () => {
    expect(validateNumber("", 10)).toBe("Enter a number.");
  });

  it("rejects whitespace-only values", () => {
    expect(validateNumber("   ", 10)).toBe("Enter a number.");
  });
});
