import { expect, test } from "vitest";

import { some } from "../src/some";

test("returns true if any item satisfies the predicate", () => {
  expect(some([1, 2, 3], (item) => item > 0)).toBe(true);
  expect(some([1, 0, -1], (item) => item > 0)).toBe(true);
  expect(some([-1, -2, -3], (item) => item > 0)).toBe(false);
});

test("returns false if the iterable has no items", () => {
  expect(some([], () => true)).toBe(false);
});

test("accepts non-array iterables", () => {
  expect(some(new Set([1, 2, 3]), (item) => item > 0)).toBe(true);
});
