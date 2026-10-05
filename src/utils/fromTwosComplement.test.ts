import { describe, expect, it } from "vitest";

import { fromTwosComplement } from "./fromTwosComplement";

describe("fromTwosComplement", () => {
  it("converts positive values", () => {
    expect(fromTwosComplement("00000101", 8)).toBe(5n);
  });

  it("converts negative values", () => {
    expect(fromTwosComplement("11111011", 8)).toBe(-5n);
  });

  it("converts negative one", () => {
    expect(fromTwosComplement("11111111", 8)).toBe(-1n);
  });

  it("converts the minimum 8-bit value", () => {
    expect(fromTwosComplement("10000000", 8)).toBe(-128n);
  });

  it("converts the maximum 8-bit value", () => {
    expect(fromTwosComplement("01111111", 8)).toBe(127n);
  });

  it("rejects incorrect bit width", () => {
    expect(() => fromTwosComplement("00000101", 16)).toThrow();
  });

  it("rejects invalid binary values", () => {
    expect(() => fromTwosComplement("00000102", 8)).toThrow();
  });
});
