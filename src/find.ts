import type { Predicate } from "./types";

/**
 * Returns the first element in `iterable` for which `predicate` returns true.
 *
 * @param iterable - The iterable to search.
 * @param predicate - A function called with each element and its index.
 * @returns The first matching element, or `undefined` if none is found.
 */
export function find<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): T | undefined {
  let index = 0;
  for (const item of iterable) {
    if (predicate(item, index++)) {
      return item;
    }
  }

  return undefined;
}
