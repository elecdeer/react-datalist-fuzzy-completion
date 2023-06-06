import { describe, it, expect } from "vitest";
import { editDistance } from "./editDistance";

describe("editDistance", () => {
  it("should return 0 for equal strings", () => {
    expect(editDistance("abc", "abc")).toBe(0);
  });

  it("should return 1 for strings with one character difference", () => {
    expect(editDistance("abc", "abd")).toBe(1);
  });

  it("should return 2 for strings with two character difference", () => {
    expect(editDistance("abc", "ad")).toBe(2);
  });

  it("日本語の文字列の編集距離が正しく計算できる", () => {
    expect(editDistance("編集距離👻", "😺編集距離")).toBe(2);
  });
});
