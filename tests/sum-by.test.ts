import { expect, test } from "vitest";

import { sumBy } from "../src/sum-by";

test("returns the sum for numbers", () => {
  expect(sumBy([1], (x) => x)).toBe(1);
  expect(sumBy([1, 2, 3, 4, 5], (x) => x)).toBe(15);
  expect(sumBy([20, 3], (x) => x)).toBe(23);
});

test("ignores null, undefined, and NaN", () => {
  expect(sumBy([NaN, 1, 2, 3, 4, 5], (x) => x)).toBe(15);
  expect(sumBy([1, 2, 3, 4, 5, NaN], (x) => x)).toBe(15);
  expect(sumBy([10, null, 3, undefined, 5, NaN], (x) => x)).toBe(18);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(sumBy([], (x) => x)).toBe(undefined);
  expect(sumBy([null], (x) => x)).toBe(undefined);
  expect(sumBy([undefined], (x) => x)).toBe(undefined);
  expect(sumBy([NaN], (x) => x)).toBe(undefined);
  expect(sumBy([NaN, NaN], (x) => x)).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(sumBy(new Set([1, 2, 3]), (x) => x)).toBe(6);
});

test("accessor receives item and index", () => {
  const results: unknown[] = [];
  sumBy(["a", "b", "c"], (d, i) => {
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
  expect(sumBy(data, (d) => d.v)).toBe(15);
});
