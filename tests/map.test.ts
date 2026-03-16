import { expect, test } from "vitest";

import { map } from "../src/map";

test("returns an array of mapped items", () => {
  expect(map([1, 0, -1], (item) => item + 1)).toEqual([2, 1, 0]);
  expect(map([], () => 1)).toEqual([]);
});

test("accepts non-array iterables", () => {
  expect(map(new Set([0, 1, 2]), (item) => item + 1)).toEqual([1, 2, 3]);
});
