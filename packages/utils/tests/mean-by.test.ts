import { expect, test } from "vitest";

import { meanBy } from "../src/mean-by";

test("returns the mean value for numbers", () => {
  expect(meanBy([1], (x) => x)).toBe(1);
  expect(meanBy([5, 1, 2, 3, 4], (x) => x)).toBe(3);
  expect(meanBy([20, 3], (x) => x)).toBe(11.5);
  expect(meanBy([3, 20], (x) => x)).toBe(11.5);
});

test("ignores null, undefined, and NaN", () => {
  expect(meanBy([NaN, 1, 2, 3, 4, 5], (x) => x)).toBe(3);
  expect(meanBy([1, 2, 3, 4, 5, NaN], (x) => x)).toBe(3);
  expect(meanBy([10, null, 3, undefined, 5, NaN], (x) => x)).toBe(6);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(meanBy([], (x) => x)).toBe(undefined);
  expect(meanBy([null], (x) => x)).toBe(undefined);
  expect(meanBy([undefined], (x) => x)).toBe(undefined);
  expect(meanBy([NaN], (x) => x)).toBe(undefined);
  expect(meanBy([NaN, NaN], (x) => x)).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(meanBy(new Set([1, 2, 3]), (x) => x)).toBe(2);
});

test("accessor receives item and index", () => {
  const results: unknown[] = [];
  meanBy(["a", "b", "c"], (d, i) => {
    results.push([d, i]);
    return 0;
  });
  expect(results).toEqual([
    ["a", 0],
    ["b", 1],
    ["c", 2],
  ]);
});

test("accessor maps items to values", () => {
  const data = [{ v: 5 }, { v: 1 }, { v: 2 }, { v: 3 }, { v: 4 }];
  expect(meanBy(data, (d) => d.v)).toBe(3);
});
