import { expect, test } from "vitest";

import { chunk } from "../src/chunk";

test("splits into chunks of the given size", () => {
  expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  expect(chunk([1, 2, 3, 4], 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
  expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  expect(chunk([1, 2, 3], 10)).toEqual([[1, 2, 3]]);
  expect(chunk([], 2)).toEqual([]);
});

test("accepts non-array iterables", () => {
  expect(chunk(new Set([1, 2, 3, 4]), 2)).toEqual([
    [1, 2],
    [3, 4],
  ]);
});

test("throws a RangeError for non-positive or non-integer size", () => {
  expect(() => chunk([1, 2, 3], 0)).toThrow(RangeError);
  expect(() => chunk([1, 2, 3], -1)).toThrow(RangeError);
  expect(() => chunk([1, 2, 3], 1.5)).toThrow(RangeError);
});
