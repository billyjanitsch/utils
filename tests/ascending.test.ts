import { expect, test } from "vitest";

import { ascending } from "../src/ascending";

test("returns -1, 0, or 1 for ordered values", () => {
  expect(ascending(1, 2)).toBe(-1);
  expect(ascending(2, 2)).toBe(0);
  expect(ascending(2, 1)).toBe(1);
});

test("works with strings", () => {
  expect(ascending("a", "b")).toBe(-1);
  expect(ascending("b", "b")).toBe(0);
  expect(ascending("b", "a")).toBe(1);
});

test("returns NaN for null or undefined inputs", () => {
  expect(ascending(null, 1)).toBeNaN();
  expect(ascending(1, null)).toBeNaN();
  expect(ascending(undefined, 1)).toBeNaN();
  expect(ascending(1, undefined)).toBeNaN();
});
