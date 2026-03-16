import { expect, test } from "vitest";

import { sort } from "../src/sort";

test("returns an array of items sorted by the comparator", () => {
  expect(sort([2, 3, 1], (a, b) => (a < b ? -1 : a > b ? 1 : 0))).toEqual([
    1, 2, 3,
  ]);
  expect(sort([2, 3, 1], (a, b) => (b < a ? -1 : b > a ? 1 : 0))).toEqual([
    3, 2, 1,
  ]);
});

test("accepts non-array iterables", () => {
  expect(
    sort(new Set([0, 1, 2]), (a, b) => (b < a ? -1 : b > a ? 1 : 0)),
  ).toEqual([2, 1, 0]);
});
