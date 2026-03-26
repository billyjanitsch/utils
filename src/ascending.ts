/**
 * Comparator that sorts values in ascending order.
 *
 * @param a - First value.
 * @param b - Second value.
 * @returns A negative number, zero, or positive number. Returns `NaN` if either value is nullish.
 * @example
 * [3, 1, 2].sort(ascending) // [1, 2, 3]
 */
export function ascending(a: unknown, b: unknown): number {
  if (a == null || b == null) return NaN;
  if (a < b) return -1;
  if (a > b) return 1;
  if (a >= b) return 0;
  return NaN;
}
