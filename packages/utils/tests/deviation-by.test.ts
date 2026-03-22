import { expect, test } from "vitest";

import { deviationBy } from "../src/deviation-by";

test("returns the standard deviation for numbers", () => {
  expect(deviationBy([2, 4, 4, 4, 5, 5, 7, 9], (x) => x)).toBe(2);
  expect(deviationBy([1], (x) => x)).toBe(0);
});

test("ignores null, undefined, and NaN", () => {
  expect(deviationBy([NaN, 2, 4, 4, 4, 5, 5, 7, 9], (x) => x)).toBe(2);
  expect(
    deviationBy([2, 4, null, 4, 4, 5, undefined, 5, 7, 9, NaN], (x) => x),
  ).toBe(2);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(deviationBy([], (x) => x)).toBe(undefined);
  expect(deviationBy([null], (x) => x)).toBe(undefined);
  expect(deviationBy([undefined], (x) => x)).toBe(undefined);
  expect(deviationBy([NaN], (x) => x)).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(deviationBy(new Set([0, 2]), (x) => x)).toBe(1);
});

test("accessor receives item and index", () => {
  const results: unknown[] = [];
  deviationBy(["a", "b", "c"], (d, i) => {
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
  expect(deviationBy(data, (d) => d.v)).toBe(2);
});
