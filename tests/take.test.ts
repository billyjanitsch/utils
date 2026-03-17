import { expect, test } from "vitest";

import { take } from "../src/take";

test("returns the first n elements", () => {
  expect(take([1, 2, 3, 4, 5], 3)).toEqual([1, 2, 3]);
  expect(take([1, 2, 3], 0)).toEqual([]);
  expect(take([1, 2, 3], 10)).toEqual([1, 2, 3]);
  expect(take([], 3)).toEqual([]);
});

test("accepts non-array iterables", () => {
  expect(take(new Set([1, 2, 3, 4]), 2)).toEqual([1, 2]);
});
