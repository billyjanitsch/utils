/**
 * Returns `true` if every element of `iterable` is also in `other`.
 *
 * @param iterable - The candidate subset.
 * @param other - The iterable to check membership against.
 * @returns `true` if `iterable` is a subset of `other`, `false` otherwise.
 */
export function subset<T>(iterable: Iterable<T>, other: Iterable<T>): boolean {
  const otherSet = new Set(other);
  for (const value of iterable) {
    if (!otherSet.has(value)) return false;
  }
  return true;
}
