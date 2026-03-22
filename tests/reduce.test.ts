import { expect, test } from "vitest";

import { reduce } from "../src/reduce";

test("returns the reduced value", () => {
  expect(reduce([1, 2, 3], (acc, item) => acc + item, 0)).toBe(6);
  expect(reduce([], (acc, item) => acc + item, 1)).toBe(1);
});

test("accepts non-array iterables", () => {
  expect(reduce(new Set([0, 1, 2]), (acc, item) => acc + item, 0)).toBe(3);
});
