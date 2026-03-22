/**
 * Returns `true` if `iterable` and `other` share no common elements.
 *
 * @param iterable - The first iterable.
 * @param other - The second iterable.
 * @returns `true` if the two iterables are disjoint, `false` otherwise.
 */
export function disjoint<T>(
  iterable: Iterable<T>,
  other: Iterable<T>,
): boolean {
  const set = new Set(iterable);
  for (const value of other) {
    if (set.has(value)) return false;
  }
  return true;
}
