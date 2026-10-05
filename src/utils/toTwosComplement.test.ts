import { describe, expect, it } from "vitest";

import { toTwosComplement } from "./toTwosComplement";

describe("toTwosComplement", () => {
  it("converts positive numbers", () => {
    expect(toTwosComplement(5n, 8)).toBe("00000101");
  });

  it("converts negative numbers", () => {
    expect(toTwosComplement(-5n, 8)).toBe("11111011");
  });

  it("converts -1", () => {
    expect(toTwosComplement(-1n, 8)).toBe("11111111");
  });

  it("converts the minimum 8-bit value", () => {
    expect(toTwosComplement(-128n, 8)).toBe("10000000");
  });

  it("converts the maximum 8-bit value", () => {
    expect(toTwosComplement(127n, 8)).toBe("01111111");
  });

  it("rejects values outside the 8-bit range", () => {
    expect(() => toTwosComplement(128n, 8)).toThrow();

    expect(() => toTwosComplement(-129n, 8)).toThrow();
  });

  it("converts -5 using 16 bits", () => {
    expect(toTwosComplement(-5n, 16)).toBe("1111111111111011");
  });

  it("converts -5 using 32 bits", () => {
    expect(toTwosComplement(-5n, 32)).toBe("11111111111111111111111111111011");
  });

  it("converts -5 using 64 bits", () => {
    expect(toTwosComplement(-5n, 64)).toBe(
      "1111111111111111111111111111111111111111111111111111111111111011",
    );
  });
});
