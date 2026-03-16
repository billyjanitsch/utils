import { expect, test } from "vitest";

import { difference } from "../src/difference";

test("returns values in the first iterable not present in others", () => {
  expect(difference([0, 1, 2], [1])).toEqual(new Set([0, 2]));
  expect(difference([1, 2, 3], [1, 2, 3])).toEqual(new Set());
  expect(difference([1, 2, 3], [])).toEqual(new Set([1, 2, 3]));
});

test("deduplicates values from the first iterable", () => {
  expect(difference([0, 1, 2, 0], [1])).toEqual(new Set([0, 2]));
});

test("accepts multiple others", () => {
  expect(difference([0, 1, 2, 3], [1], [3])).toEqual(new Set([0, 2]));
});

test("accepts non-array iterables", () => {
  expect(difference(new Set([0, 1, 2]), new Set([1]))).toEqual(new Set([0, 2]));
});

test("with no others, returns a deduplicated copy", () => {
  expect(difference([1, 2, 2, 3])).toEqual(new Set([1, 2, 3]));
});
