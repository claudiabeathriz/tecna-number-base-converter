import { describe, expect, it } from "vitest";

import { convertNumber } from "./convertNumber";

describe("convertNumber", () => {
  it("converts binary to decimal", () => {
    expect(convertNumber("1010", 2, 10)).toBe("10");
  });

  it("converts decimal to binary", () => {
    expect(convertNumber("10", 10, 2)).toBe("1010");
  });

  it("converts decimal to hexadecimal", () => {
    expect(convertNumber("255", 10, 16)).toBe("FF");
  });

  it("converts hexadecimal to decimal", () => {
    expect(convertNumber("FF", 16, 10)).toBe("255");
  });

  it("converts decimal to octal", () => {
    expect(convertNumber("64", 10, 8)).toBe("100");
  });

  it("converts octal to binary", () => {
    expect(convertNumber("10", 8, 2)).toBe("1000");
  });
});
