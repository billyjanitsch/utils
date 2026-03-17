/**
 * Computes the sum of an iterable of numbers, ignoring null, undefined, and NaN values.
 *
 * @param iterable - The iterable of numbers to sum.
 * @returns The sum, or `undefined` if there are no valid values.
 */
export function sum(
  iterable: Iterable<number | null | undefined>,
): number | undefined {
  let sum = 0;
  let count = 0;

  for (const value of iterable) {
    if (value != null && !Number.isNaN(value)) {
      sum += value;
      ++count;
    }
  }

  return count ? sum : undefined;
}
