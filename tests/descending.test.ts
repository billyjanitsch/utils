import { expect, test } from "vitest";

import { descending } from "../src/descending";

test("returns -1, 0, or 1 for ordered values", () => {
  expect(descending(2, 1)).toBe(-1);
  expect(descending(2, 2)).toBe(0);
  expect(descending(1, 2)).toBe(1);
});

test("works with strings", () => {
  expect(descending("b", "a")).toBe(-1);
  expect(descending("b", "b")).toBe(0);
  expect(descending("a", "b")).toBe(1);
});

test("returns NaN for null or undefined inputs", () => {
  expect(descending(null, 1)).toBeNaN();
  expect(descending(1, null)).toBeNaN();
  expect(descending(undefined, 1)).toBeNaN();
  expect(descending(1, undefined)).toBeNaN();
});
