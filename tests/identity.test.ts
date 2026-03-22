import { expect, test } from "vitest";

import { identity } from "../src/identity";

test("returns its argument unchanged", () => {
  const object = { foo: "bar" };
  expect(identity(object)).toBe(object);
});
