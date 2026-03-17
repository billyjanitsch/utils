import { expect, test } from "vitest";

import { disjoint } from "../src/disjoint";

test("returns true when iterables share no elements", () => {
  expect(disjoint([1, 2], [3, 4])).toBe(true);
  expect(disjoint([1, 2], [])).toBe(true);
  expect(disjoint([], [1, 2])).toBe(true);
});

test("returns false when iterables share any element", () => {
  expect(disjoint([1, 2], [2, 3])).toBe(false);
  expect(disjoint([1], [1])).toBe(false);
});

test("accepts non-array iterables", () => {
  expect(disjoint(new Set([1, 2]), new Set([3, 4]))).toBe(true);
});
