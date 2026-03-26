/**
 * Returns `true` if every element of `iterable` is also in `other`.
 *
 * @param iterable - The candidate subset.
 * @param other - The iterable to check membership against.
 * @returns `true` if `iterable` is a subset of `other`, `false` otherwise.
 * @example
 * subset([1, 2], [1, 2, 3]) // true
 * subset([1, 4], [1, 2, 3]) // false
 */
export function subset<T>(iterable: Iterable<T>, other: Iterable<T>): boolean {
  const otherSet = new Set(other);
  for (const value of iterable) {
    if (!otherSet.has(value)) return false;
  }
  return true;
}
