import { expect, test } from "vitest";

import { every } from "../src/every";

test("returns true if all items satisfy the predicate", () => {
  expect(every([1, 2, 3], (item) => item > 0)).toBe(true);
  expect(every([1, 0, -1], (item) => item > 0)).toBe(false);
  expect(every([-1, -2, -3], (item) => item > 0)).toBe(false);
});

test("returns true if the iterable has no items", () => {
  expect(every([], () => false)).toBe(true);
});

test("accepts non-array iterables", () => {
  expect(every(new Set([1, 2, 3]), (item) => item > 0)).toBe(true);
});
