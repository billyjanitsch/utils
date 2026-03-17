import { expect, test } from "vitest";

import { keyBy } from "../src/key-by";

test("indexes items by key", () => {
  const items = [
    { id: 1, name: "a" },
    { id: 2, name: "b" },
    { id: 3, name: "c" },
  ];
  expect(keyBy(items, (item) => item.id)).toEqual(
    new Map([
      [1, items[0]],
      [2, items[1]],
      [3, items[2]],
    ]),
  );
});

test("last item wins on collision", () => {
  const items = [
    { id: 1, name: "first" },
    { id: 1, name: "last" },
  ];
  expect(keyBy(items, (item) => item.id)).toEqual(new Map([[1, items[1]]]));
});

test("accepts non-array iterables", () => {
  expect(keyBy(new Set(["a", "bb", "ccc"]), (s) => s.length)).toEqual(
    new Map([
      [1, "a"],
      [2, "bb"],
      [3, "ccc"],
    ]),
  );
});

test("returns an empty map for an empty iterable", () => {
  expect(keyBy([], (n) => n)).toEqual(new Map());
});

test("passes index to accessor", () => {
  expect(keyBy(["a", "b", "c"], (_item, i) => i)).toEqual(
    new Map([
      [0, "a"],
      [1, "b"],
      [2, "c"],
    ]),
  );
});
