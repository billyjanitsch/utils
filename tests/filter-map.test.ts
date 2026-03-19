import { expect, test } from "vitest";

import { filterMap } from "../src/filter-map";

test("returns a map of entries that satisfy the predicate", () => {
  expect(
    filterMap(
      new Map([
        ["a", 1],
        ["b", 2],
        ["c", 3],
      ]),
      (value) => value > 1,
    ),
  ).toEqual(
    new Map([
      ["b", 2],
      ["c", 3],
    ]),
  );
});

test("passes value and key to predicate", () => {
  expect(
    filterMap(
      new Map([
        ["keep", 1],
        ["drop", 2],
      ]),
      (_, key) => key === "keep",
    ),
  ).toEqual(new Map([["keep", 1]]));
});

test("returns empty map when no entries pass", () => {
  expect(filterMap(new Map([["a", 1]]), () => false)).toEqual(new Map());
});
