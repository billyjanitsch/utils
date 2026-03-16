import { expect, test } from "vitest";

import { groupBy } from "../src/group-by";

test("groups items by key", () => {
  expect(groupBy([1, 2, 3, 4], (n) => n % 2)).toEqual(
    new Map([
      [1, [1, 3]],
      [0, [2, 4]],
    ]),
  );
});

test("accepts non-array iterables", () => {
  expect(groupBy(new Set(["a", "bb", "c"]), (s) => s.length)).toEqual(
    new Map([
      [1, ["a", "c"]],
      [2, ["bb"]],
    ]),
  );
});

test("returns an empty map for an empty iterable", () => {
  expect(groupBy([], (n) => n)).toEqual(new Map());
});

test("passes index to accessor", () => {
  expect(groupBy(["a", "b", "c"], (_item, i) => i % 2 === 0)).toEqual(
    new Map([
      [true, ["a", "c"]],
      [false, ["b"]],
    ]),
  );
});

test("groups all items under one key when accessor returns the same value", () => {
  expect(groupBy([1, 2, 3], () => "x")).toEqual(new Map([["x", [1, 2, 3]]]));
});

test("handles object keys by reference", () => {
  const keyA = { type: "a" };
  const keyB = { type: "b" };
  const items = [
    { key: keyA, val: 1 },
    { key: keyB, val: 2 },
    { key: keyA, val: 3 },
  ];
  expect(groupBy(items, (item) => item.key)).toEqual(
    new Map([
      [keyA, [items[0], items[2]]],
      [keyB, [items[1]]],
    ]),
  );
});
