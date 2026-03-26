import type { Predicate } from "./types";

/**
 * Skips leading elements of an iterable while `predicate` returns true, then returns the rest.
 *
 * @param iterable - The iterable to drop from.
 * @param predicate - A function called with each element and its index.
 * @returns An array of elements after the leading elements that passed the predicate.
 * @example
 * dropWhile([1, 2, 3, 1], x => x < 3) // [3, 1]
 */
export function dropWhile<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): T[] {
  const result = [];

  let index = 0;
  let dropping = true;
  for (const item of iterable) {
    if (dropping && predicate(item, index++)) continue;
    dropping = false;
    result.push(item);
  }

  return result;
}
