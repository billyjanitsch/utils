import { expect, test } from "vitest";

import { includes } from "../src/includes";

test("returns true if the value is present", () => {
  expect(includes([1, 2, 3], 1)).toBe(true);
  expect(includes([1, 2, 3], 3)).toBe(true);
});

test("returns false if the value is absent", () => {
  expect(includes([1, 2, 3], 4)).toBe(false);
});

test("returns false if the iterable has no items", () => {
  expect(includes([], 1)).toBe(false);
});

test("accepts non-array iterables", () => {
  expect(includes(new Set([1, 2, 3]), 2)).toBe(true);
  expect(includes(new Set([1, 2, 3]), 4)).toBe(false);
});

test("uses strict equality", () => {
  expect(includes([1, 2, 3], "1" as unknown as number)).toBe(false);
  expect(includes([null], undefined as unknown as null)).toBe(false);
});
