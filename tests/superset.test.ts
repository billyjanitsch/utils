import { expect, test } from "vitest";

import { superset } from "../src/superset";

test("returns true when the first iterable contains all elements of the other", () => {
  expect(superset([1, 2, 3], [1, 2])).toBe(true);
  expect(superset([1, 2, 3], [1, 2, 3])).toBe(true);
  expect(superset([1, 2, 3], [])).toBe(true);
});

test("returns false when the first iterable is missing elements from the other", () => {
  expect(superset([1, 2], [1, 2, 3])).toBe(false);
  expect(superset([], [1])).toBe(false);
});

test("accepts non-array iterables", () => {
  expect(superset(new Set([1, 2, 3]), new Set([1, 2]))).toBe(true);
});
