import { expect, test } from "vitest";

import { subset } from "../src/subset";

test("returns true when all elements of the first iterable are in the other", () => {
  expect(subset([1, 2], [1, 2, 3])).toBe(true);
  expect(subset([1, 2, 3], [1, 2, 3])).toBe(true);
  expect(subset([], [1, 2, 3])).toBe(true);
});

test("returns false when the first iterable has elements not in the other", () => {
  expect(subset([1, 2, 3], [1, 2])).toBe(false);
  expect(subset([1], [])).toBe(false);
});

test("accepts non-array iterables", () => {
  expect(subset(new Set([1, 2]), new Set([1, 2, 3]))).toBe(true);
});
