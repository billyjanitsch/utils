import { expect, test } from "vitest";

import { sum } from "../src/sum";

test("returns the sum for numbers", () => {
  expect(sum([1])).toBe(1);
  expect(sum([1, 2, 3, 4, 5])).toBe(15);
  expect(sum([20, 3])).toBe(23);
});

test("ignores null, undefined, and NaN", () => {
  expect(sum([NaN, 1, 2, 3, 4, 5])).toBe(15);
  expect(sum([1, 2, 3, 4, 5, NaN])).toBe(15);
  expect(sum([10, null, 3, undefined, 5, NaN])).toBe(18);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(sum([])).toBe(undefined);
  expect(sum([null])).toBe(undefined);
  expect(sum([undefined])).toBe(undefined);
  expect(sum([NaN])).toBe(undefined);
  expect(sum([NaN, NaN])).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(sum(new Set([1, 2, 3]))).toBe(6);
});
