import { expect, test } from "vitest";

import { deviation } from "../src/deviation";

test("returns the standard deviation for numbers", () => {
  expect(deviation([2, 4, 4, 4, 5, 5, 7, 9])).toBe(2);
  expect(deviation([1])).toBe(0);
});

test("ignores null, undefined, and NaN", () => {
  expect(deviation([NaN, 2, 4, 4, 4, 5, 5, 7, 9])).toBe(2);
  expect(deviation([2, 4, null, 4, 4, 5, undefined, 5, 7, 9, NaN])).toBe(2);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(deviation([])).toBe(undefined);
  expect(deviation([null])).toBe(undefined);
  expect(deviation([undefined])).toBe(undefined);
  expect(deviation([NaN])).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(deviation(new Set([0, 2]))).toBe(1);
});
