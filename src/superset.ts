/**
 * Returns `true` if every element of `other` is also in `iterable`.
 *
 * @param iterable - The candidate superset.
 * @param other - The iterable to check membership against.
 * @returns `true` if `iterable` is a superset of `other`, `false` otherwise.
 * @example
 * superset([1, 2, 3], [1, 2]) // true
 * superset([1, 2], [1, 2, 3]) // false
 */
export function superset<T>(
  iterable: Iterable<T>,
  other: Iterable<T>,
): boolean {
  const set = new Set(iterable);
  for (const value of other) {
    if (!set.has(value)) return false;
  }
  return true;
}
