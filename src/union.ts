/**
 * Returns a set of all unique elements across all `iterables`.
 *
 * @param iterables - The iterables to combine.
 * @returns A new set containing every unique element from all inputs.
 * @example
 * union([1, 2], [2, 3]) // Set { 1, 2, 3 }
 */
export function union<T>(...iterables: Iterable<T>[]): Set<T> {
  const result = new Set<T>();
  for (const iterable of iterables) {
    for (const value of iterable) {
      result.add(value);
    }
  }
  return result;
}
