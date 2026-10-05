import { describe, expect, it } from "vitest";

import { parseNumber } from "./parseNumber";

describe("parseNumber", () => {
  it("parses positive decimal numbers", () => {
    expect(parseNumber("42", 10)).toBe(42n);
  });

  it("parses negative decimal numbers", () => {
    expect(parseNumber("-42", 10)).toBe(-42n);
  });

  it("parses binary numbers", () => {
    expect(parseNumber("1010", 2)).toBe(10n);
  });

  it("parses hexadecimal numbers", () => {
    expect(parseNumber("FF", 16)).toBe(255n);
  });

  it("parses negative hexadecimal numbers", () => {
    expect(parseNumber("-FF", 16)).toBe(-255n);
  });

  it("parses octal numbers", () => {
    expect(parseNumber("100", 8)).toBe(64n);
  });
});
