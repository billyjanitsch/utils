import { expect, test } from "vitest";

import { ascending } from "../src/ascending";
import { descending } from "../src/descending";
import { sort } from "../src/sort";

test("returns an array of items sorted by the comparator", () => {
  expect(sort([2, 3, 1], ascending)).toEqual([1, 2, 3]);
  expect(sort([2, 3, 1], descending)).toEqual([3, 2, 1]);
});

test("accepts non-array iterables", () => {
  expect(sort(new Set([0, 1, 2]), descending)).toEqual([2, 1, 0]);
});
