/**
 * Returns a set of elements in `iterable` that are not in any of `others`.
 *
 * @param iterable - The base iterable.
 * @param others - Iterables whose elements are excluded from the result.
 * @returns A new set containing elements only present in `iterable`.
 * @example
 * difference([1, 2, 3], [2, 3, 4]) // Set { 1 }
 */
export function difference<T>(
  iterable: Iterable<T>,
  ...others: Iterable<T>[]
): Set<T> {
  const result = new Set(iterable);
  for (const other of others) {
    for (const value of other) {
      result.delete(value);
    }
  }
  return result;
}
