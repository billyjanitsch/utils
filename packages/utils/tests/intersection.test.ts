import { expect, test } from "vitest";

import { intersection } from "../src/intersection";

test("returns values present in all iterables", () => {
  expect(intersection([0, 1, 2], [1, 2, 3])).toEqual(new Set([1, 2]));
  expect(intersection([1, 2, 3], [1, 2, 3])).toEqual(new Set([1, 2, 3]));
  expect(intersection([1, 2], [3, 4])).toEqual(new Set());
});

test("deduplicates values from the first iterable", () => {
  expect(intersection([0, 1, 1, 2], [1, 2])).toEqual(new Set([1, 2]));
});

test("accepts multiple others", () => {
  expect(intersection([0, 1, 2, 3], [1, 2, 3], [2, 3, 4])).toEqual(
    new Set([2, 3]),
  );
});

test("accepts non-array iterables", () => {
  expect(intersection(new Set([0, 1, 2]), new Set([1, 2]))).toEqual(
    new Set([1, 2]),
  );
});

test("with no others, returns a deduplicated copy", () => {
  expect(intersection([1, 2, 2, 3])).toEqual(new Set([1, 2, 3]));
});
