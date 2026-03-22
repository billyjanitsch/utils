import { expect, test } from "vitest";

import { varianceBy } from "../src/variance-by";

test("returns the variance for numbers", () => {
  expect(varianceBy([2, 4, 4, 4, 5, 5, 7, 9], (x) => x)).toBe(4);
  expect(varianceBy([1], (x) => x)).toBe(0);
});

test("ignores null, undefined, and NaN", () => {
  expect(varianceBy([NaN, 2, 4, 4, 4, 5, 5, 7, 9], (x) => x)).toBe(4);
  expect(
    varianceBy([2, 4, null, 4, 4, 5, undefined, 5, 7, 9, NaN], (x) => x),
  ).toBe(4);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(varianceBy([], (x) => x)).toBe(undefined);
  expect(varianceBy([null], (x) => x)).toBe(undefined);
  expect(varianceBy([undefined], (x) => x)).toBe(undefined);
  expect(varianceBy([NaN], (x) => x)).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(varianceBy(new Set([0, 2]), (x) => x)).toBe(1);
});

test("accessor receives item and index", () => {
  const results: unknown[] = [];
  varianceBy(["a", "b", "c"], (d, i) => {
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
  const data = [
    { v: 2 },
    { v: 4 },
    { v: 4 },
    { v: 4 },
    { v: 5 },
    { v: 5 },
    { v: 7 },
    { v: 9 },
  ];
  expect(varianceBy(data, (d) => d.v)).toBe(4);
});
