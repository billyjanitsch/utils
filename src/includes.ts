/**
 * Returns `true` if `iterable` contains `value` (using strict equality).
 *
 * @param iterable - The iterable to search.
 * @param value - The value to search for.
 * @returns `true` if the value is found, `false` otherwise.
 * @example
 * includes([1, 2, 3], 2) // true
 */
export function includes<T>(iterable: Iterable<T>, value: T): boolean {
  for (const item of iterable) {
    if (item === value) {
      return true;
    }
  }

  return false;
}
