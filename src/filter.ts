import type { Predicate } from "./types";

/**
 * Filters an iterable to elements for which `predicate` returns true.
 *
 * @param iterable - The iterable to filter.
 * @param predicate - A function called with each element and its index.
 * @returns An array of elements that passed the predicate.
 */
export function filter<T>(iterable: Iterable<T>, predicate: Predicate<T>): T[] {
  const array = [];

  let index = 0;
  for (const item of iterable) {
    if (predicate(item, index++)) {
      array.push(item);
    }
  }

  return array;
}
