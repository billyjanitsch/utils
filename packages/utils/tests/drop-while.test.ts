import { expect, test } from "vitest";

import { dropWhile } from "../src/drop-while";

test("skips leading elements while predicate holds", () => {
  expect(dropWhile([1, 2, 3, 2, 1], (x) => x < 3)).toEqual([3, 2, 1]);
  expect(dropWhile([1, 2, 3], () => false)).toEqual([1, 2, 3]);
  expect(dropWhile([1, 2, 3], () => true)).toEqual([]);
  expect(dropWhile([], () => true)).toEqual([]);
});

test("accepts non-array iterables", () => {
  expect(dropWhile(new Set([1, 2, 3, 4]), (x) => x < 3)).toEqual([3, 4]);
});
