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
