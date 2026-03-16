import { expect, test } from "vitest";

import { reverse } from "../src/reverse";

test("returns an array of reversed items", () => {
  expect(reverse([1, 2, 3])).toEqual([3, 2, 1]);
  expect(reverse([])).toEqual([]);
});

test("accepts non-array iterables", () => {
  expect(reverse(new Set([0, 1, 2]))).toEqual([2, 1, 0]);
});
