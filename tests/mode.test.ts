import { expect, test } from "vitest";

import { mode } from "../src/mode";

test("returns the most frequent value for numbers", () => {
  expect(mode([1])).toBe(1);
  expect(mode([5, 1, 1, 3, 4])).toBe(1);
});

test("returns the most frequent value for strings", () => {
  expect(mode(["1"])).toBe("1");
  expect(mode(["5", "1", "1", "3", "4"])).toBe("1");
});

test("returns the first of the most frequent values on ties", () => {
  expect(mode(["5", "1", "1", "2", "2", "3", "4"])).toBe("1");
});

test("ignores null, undefined, and NaN", () => {
  expect(mode([NaN, 1, 1, 3, 4, 5])).toBe(1);
  expect(mode([1, NaN, NaN, 1, 5, NaN])).toBe(1);
  expect(mode([null, 1, 1, 3, 4, 5])).toBe(1);
  expect(mode([1, undefined, undefined, 1, 5, undefined])).toBe(1);
});

test("returns undefined for empty or all-invalid arrays", () => {
  expect(mode([])).toBe(undefined);
  expect(mode([null])).toBe(undefined);
  expect(mode([undefined])).toBe(undefined);
  expect(mode([NaN])).toBe(undefined);
  expect(mode([NaN, NaN])).toBe(undefined);
});

test("accepts non-array iterables", () => {
  expect(mode(new Set("abc"))).toBe("a");
});
