/**
 * Comparator that sorts values in descending order.
 *
 * @param a - First value.
 * @param b - Second value.
 * @returns A negative number, zero, or positive number. Returns `NaN` if either value is nullish.
 * @example
 * [3, 1, 2].sort(descending) // [3, 2, 1]
 */
export function descending(a: unknown, b: unknown): number {
  if (a == null || b == null) return NaN;
  if (b < a) return -1;
  if (b > a) return 1;
  if (b >= a) return 0;
  return NaN;
}
