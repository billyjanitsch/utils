import { expect, test } from "vitest";

import { modeBy } from "../src/mode-by";

test("returns the most frequent value for numbers", () => {
  expect(modeBy([1], (x) => x)).toBe(1);
  expect(modeBy([5, 1, 1, 3, 4], (x) => x)).toBe(1);
});

test("returns the most frequent value for strings", () => {
  expect(modeBy(["1"], (x) => x)).toBe("1");
  expect(modeBy(["5", "1", "1", "3", "4"], (x) => x)).toBe("1");
});

test("returns the first of the most frequent values on ties", () => {
  expect(modeBy(["5", "1", "1", "2", "2", "3", "4"], (x) => x)).toBe("1");
});

test("ignores null, undefined, and NaN", () => {
  expect(modeBy([NaN, 1, 1, 3, 4, 5], (x) => x)).toBe(1);
  expect(modeBy([1, NaN, NaN, 1, 5, NaN], (x) => x)).toBe(1);
  expect(modeBy([null, 1, 1, 3, 4, 5], (x) => x)).toBe(1);
  expect(modeBy([1, undefined, undefined, 1, 5, undefined], (x) => x)).toBe(1);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(modeBy([], (x) => x)).toBe(undefined);
  expect(modeBy([null], (x) => x)).toBe(undefined);
  expect(modeBy([undefined], (x) => x)).toBe(undefined);
  expect(modeBy([NaN], (x) => x)).toBe(undefined);
  expect(modeBy([NaN, NaN], (x) => x)).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(modeBy(new Set("abc"), (x) => x)).toBe("a");
});

test("accessor receives item and index", () => {
  const results: unknown[] = [];
  modeBy(["a", "b", "c"], (d, i) => {
    results.push([d, i]);
    return d;
  });
  expect(results).toEqual([
    ["a", 0],
    ["b", 1],
    ["c", 2],
  ]);
});

test("accessor maps items to values", () => {
  const data = [{ v: 5 }, { v: 1 }, { v: 1 }, { v: 3 }, { v: 4 }];
  expect(modeBy(data, (d) => d.v)).toBe(1);
});
