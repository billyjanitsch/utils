import type { Predicate } from "./types";

/**
 * Returns `true` if `predicate` returns true for at least one element in `iterable`.
 *
 * @param iterable - The iterable to test.
 * @param predicate - A function called with each element and its index.
 * @returns `true` if any element passes, `false` otherwise.
 */
export function some<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): boolean {
  let index = 0;
  for (const item of iterable) {
    if (predicate(item, index++)) {
      return true;
    }
  }

  return false;
}
