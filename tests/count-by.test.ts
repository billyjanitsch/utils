import { expect, test } from "vitest";

import { countBy } from "../src/count-by";

test("counts items by key", () => {
  expect(countBy([1, 2, 3, 4], (n) => n % 2)).toEqual(
    new Map([
      [1, 2],
      [0, 2],
    ]),
  );
});

test("accepts non-array iterables", () => {
  expect(countBy(new Set(["a", "bb", "c"]), (s) => s.length)).toEqual(
    new Map([
      [1, 2],
      [2, 1],
    ]),
  );
});

test("returns an empty map for an empty iterable", () => {
  expect(countBy([], (n) => n)).toEqual(new Map());
});

test("passes index to accessor", () => {
  expect(countBy(["a", "b", "c"], (_item, i) => i % 2 === 0)).toEqual(
    new Map([
      [true, 2],
      [false, 1],
    ]),
  );
});
