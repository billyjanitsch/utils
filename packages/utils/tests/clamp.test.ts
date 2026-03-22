import { expect, test } from "vitest";

import { clamp } from "../src/clamp";

test("returns value when within range", () => {
  expect(clamp(5, 0, 10)).toBe(5);
  expect(clamp(0, 0, 10)).toBe(0);
  expect(clamp(10, 0, 10)).toBe(10);
});

test("clamps to minimum", () => {
  expect(clamp(-5, 0, 10)).toBe(0);
});

test("clamps to maximum", () => {
  expect(clamp(15, 0, 10)).toBe(10);
});

test("works with negative ranges", () => {
  expect(clamp(-5, -10, -1)).toBe(-5);
  expect(clamp(-15, -10, -1)).toBe(-10);
  expect(clamp(0, -10, -1)).toBe(-1);
});

test("works when minimum equals maximum", () => {
  expect(clamp(3, 5, 5)).toBe(5);
  expect(clamp(7, 5, 5)).toBe(5);
});

test("clamps Infinity values", () => {
  expect(clamp(Infinity, 0, 10)).toBe(10);
  expect(clamp(-Infinity, 0, 10)).toBe(0);
});

test("returns maximum when minimum exceeds maximum", () => {
  expect(clamp(5, 10, 0)).toBe(0);
  expect(clamp(-5, 10, 0)).toBe(0);
});
