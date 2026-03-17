import { expect, test } from "vitest";

import { range } from "../src/range";

test("creates a range of numbers", () => {
  expect(range(0, 5)).toEqual([0, 1, 2, 3, 4]);
  expect(range(1, 4)).toEqual([1, 2, 3]);
  expect(range(0, 0)).toEqual([]);
  expect(range(5, 3)).toEqual([]);
});

test("accepts a step", () => {
  expect(range(0, 10, 2)).toEqual([0, 2, 4, 6, 8]);
  expect(range(0, 1, 0.5)).toEqual([0, 0.5]);
});

test("step that doesn't align with end", () => {
  expect(range(0, 10, 3)).toEqual([0, 3, 6, 9]);
  expect(range(0, 10, 4)).toEqual([0, 4, 8]);
});

test("throws on step=0", () => {
  expect(() => range(0, 5, 0)).toThrow(RangeError);
});

test("negative step", () => {
  expect(range(5, 0, -1)).toEqual([5, 4, 3, 2, 1]);
  expect(range(10, 0, -3)).toEqual([10, 7, 4, 1]);
});
