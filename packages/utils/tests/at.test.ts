import { expect, test } from "vitest";

import { at } from "../src/at";

test("returns elements at the specified indices", () => {
  expect(at([10, 20, 30], [0, 2])).toEqual([10, 30]);
  expect(at([10, 20, 30], [1])).toEqual([20]);
});

test("supports negative indices", () => {
  expect(at([10, 20, 30], [-1])).toEqual([30]);
  expect(at([10, 20, 30], [-3, -1])).toEqual([10, 30]);
});

test("skips out-of-bounds indices", () => {
  expect(at([10, 20, 30], [5, -5])).toEqual([]);
  expect(at([10, 20, 30], [0, 5])).toEqual([10]);
});

test("returns empty array for empty indices", () => {
  expect(at([1, 2, 3], [])).toEqual([]);
});

test("accepts non-array iterables", () => {
  expect(at(new Set([10, 20, 30]), [0, 2])).toEqual([10, 30]);
  expect(at(new Set([10, 20, 30]), new Set([0, 1]))).toEqual([10, 20]);
});
