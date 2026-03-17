import { expect, test } from "vitest";

import { forEach } from "../src/for-each";

test("calls fn for each element with item and index", () => {
  const results: [number, number][] = [];
  forEach([10, 20, 30], (item, index) => results.push([item, index]));
  expect(results).toEqual([
    [10, 0],
    [20, 1],
    [30, 2],
  ]);
});

test("accepts non-array iterables", () => {
  const results: number[] = [];
  forEach(new Set([1, 2, 3]), (item) => results.push(item));
  expect(results).toEqual([1, 2, 3]);
});
