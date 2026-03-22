import { expect, test } from "vitest";

import { takeWhile } from "../src/take-while";

test("returns leading elements while predicate holds", () => {
  expect(takeWhile([1, 2, 3, 2, 1], (x) => x < 3)).toEqual([1, 2]);
  expect(takeWhile([1, 2, 3], () => false)).toEqual([]);
  expect(takeWhile([1, 2, 3], () => true)).toEqual([1, 2, 3]);
  expect(takeWhile([], () => true)).toEqual([]);
});

test("accepts non-array iterables", () => {
  expect(takeWhile(new Set([1, 2, 3, 4]), (x) => x < 3)).toEqual([1, 2]);
});
