import { expect, test } from "vitest";

import { union } from "../src/union";

test("returns all unique values across iterables", () => {
  expect(union([0, 1], [1, 2])).toEqual(new Set([0, 1, 2]));
  expect(union([1, 2, 3], [1, 2, 3])).toEqual(new Set([1, 2, 3]));
  expect(union([1, 2], [])).toEqual(new Set([1, 2]));
});

test("deduplicates values", () => {
  expect(union([0, 0, 1], [1, 2])).toEqual(new Set([0, 1, 2]));
});

test("accepts multiple iterables", () => {
  expect(union([0], [1], [2])).toEqual(new Set([0, 1, 2]));
});

test("accepts non-array iterables", () => {
  expect(union(new Set([0, 1]), new Set([1, 2]))).toEqual(new Set([0, 1, 2]));
});

test("with no arguments, returns an empty set", () => {
  expect(union()).toEqual(new Set());
});
