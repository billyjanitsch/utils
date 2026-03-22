import { expect, test } from "vitest";

import { filter } from "../src/filter";

test("returns an array of items that satisfy the predicate", () => {
  expect(filter([1, 0, 2, -1], (item) => item > 0)).toEqual([1, 2]);
  expect(filter([1, 2, 3], () => false)).toEqual([]);
});

test("accepts non-array iterables", () => {
  expect(filter(new Set([0, 1, 2]), (item) => item > 0)).toEqual([1, 2]);
});
