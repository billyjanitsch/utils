import { expect, test } from "vitest";

import { drop } from "../src/drop";

test("skips the first n elements", () => {
  expect(drop([1, 2, 3, 4, 5], 3)).toEqual([4, 5]);
  expect(drop([1, 2, 3], 0)).toEqual([1, 2, 3]);
  expect(drop([1, 2, 3], 10)).toEqual([]);
  expect(drop([], 3)).toEqual([]);
});

test("accepts non-array iterables", () => {
  expect(drop(new Set([1, 2, 3, 4]), 2)).toEqual([3, 4]);
});
