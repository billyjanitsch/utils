import type { Predicate } from "./types";

/**
 * Returns `true` if `predicate` returns true for every element in `iterable`.
 *
 * @param iterable - The iterable to test.
 * @param predicate - A function called with each element and its index.
 * @returns `true` if all elements pass, `false` otherwise.
 * @example
 * every([2, 4, 6], x => x % 2 === 0) // true
 */
export function every<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): boolean {
  let index = 0;
  for (const item of iterable) {
    if (!predicate(item, index++)) {
      return false;
    }
  }

  return true;
}
