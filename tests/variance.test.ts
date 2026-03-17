import { expect, test } from "vitest";

import { variance } from "../src/variance";

test("returns the variance for numbers", () => {
  expect(variance([2, 4, 4, 4, 5, 5, 7, 9])).toBe(4);
  expect(variance([1])).toBe(0);
});

test("ignores null, undefined, and NaN", () => {
  expect(variance([NaN, 2, 4, 4, 4, 5, 5, 7, 9])).toBe(4);
  expect(variance([2, 4, null, 4, 4, 5, undefined, 5, 7, 9, NaN])).toBe(4);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(variance([])).toBe(undefined);
  expect(variance([null])).toBe(undefined);
  expect(variance([undefined])).toBe(undefined);
  expect(variance([NaN])).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(variance(new Set([0, 2]))).toBe(1);
});
