/**
 * Returns `true` if every element of `other` is also in `iterable`.
 *
 * @param iterable - The candidate superset.
 * @param other - The iterable to check membership against.
 * @returns `true` if `iterable` is a superset of `other`, `false` otherwise.
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
