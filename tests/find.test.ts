import { expect, test } from "vitest";

import { find } from "../src/find";

test("returns the first item that satisfies the predicate", () => {
  expect(find([1, 2, 3], (item) => item > 1)).toBe(2);
  expect(find([-1, 0, 1], (item) => item > 0)).toBe(1);
});

test("returns undefined when no item satisfies the predicate", () => {
  expect(find([1, 2, 3], () => false)).toBeUndefined();
  expect(find([], () => true)).toBeUndefined();
});

test("passes the index to the predicate", () => {
  expect(find(["a", "b", "c"], (_, i) => i === 2)).toBe("c");
});

test("accepts non-array iterables", () => {
  expect(find(new Set([1, 2, 3]), (item) => item > 1)).toBe(2);
});
