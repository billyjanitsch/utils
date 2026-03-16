import { expect, test } from "vitest";

import { mean } from "../src/mean";

test("returns the mean value for numbers", () => {
  expect(mean([1])).toBe(1);
  expect(mean([5, 1, 2, 3, 4])).toBe(3);
  expect(mean([20, 3])).toBe(11.5);
  expect(mean([3, 20])).toBe(11.5);
});

test("ignores null, undefined, and NaN", () => {
  expect(mean([NaN, 1, 2, 3, 4, 5])).toBe(3);
  expect(mean([1, 2, 3, 4, 5, NaN])).toBe(3);
  expect(mean([10, null, 3, undefined, 5, NaN])).toBe(6);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(mean([])).toBe(undefined);
  expect(mean([null])).toBe(undefined);
  expect(mean([undefined])).toBe(undefined);
  expect(mean([NaN])).toBe(undefined);
  expect(mean([NaN, NaN])).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(mean(new Set([1, 2, 3]))).toBe(2);
});
