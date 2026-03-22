/**
 * Returns a set of elements present in `iterable` and all `others`.
 *
 * @param iterable - The base iterable.
 * @param others - Additional iterables to intersect with.
 * @returns A new set containing only elements common to all inputs.
 */
export function intersection<T>(
  iterable: Iterable<T>,
  ...others: Iterable<T>[]
): Set<T> {
  const result = new Set(iterable);
  for (const other of others) {
    const otherSet = new Set(other);
    for (const value of result) {
      if (!otherSet.has(value)) {
        result.delete(value);
      }
    }
  }
  return result;
}
