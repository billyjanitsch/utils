import type { Predicate } from "./types";

/**
 * Returns leading elements of an iterable while `predicate` returns true.
 *
 * @param iterable - The iterable to take from.
 * @param predicate - A function called with each element and its index.
 * @returns An array of leading elements that passed the predicate.
 * @example
 * takeWhile([1, 2, 3, 1], x => x < 3) // [1, 2]
 */
export function takeWhile<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): T[] {
  const result = [];

  let index = 0;
  for (const item of iterable) {
    if (!predicate(item, index++)) break;
    result.push(item);
  }

  return result;
}
