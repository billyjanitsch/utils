import type { Accessor } from "./types";

/**
 * Maps each element of an iterable through `mapper`.
 *
 * @param iterable - The iterable to map over.
 * @param mapper - A function called with each element and its index.
 * @returns An array of mapped values.
 * @example
 * map([1, 2, 3], x => x * 2) // [2, 4, 6]
 */
export function map<T, U>(iterable: Iterable<T>, mapper: Accessor<T, U>): U[] {
  return Array.from(iterable, mapper);
}
