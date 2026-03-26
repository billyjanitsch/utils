import type { Comparator } from "./types";

/**
 * Returns a new sorted array of elements from `iterable`.
 *
 * @param iterable - The iterable to sort.
 * @param comparator - A comparator function defining the sort order.
 * @returns A new sorted array.
 * @example
 * sort([3, 1, 2], ascending) // [1, 2, 3]
 */
export function sort<T>(iterable: Iterable<T>, comparator: Comparator<T>): T[] {
  return Array.from(iterable).sort(comparator);
}
