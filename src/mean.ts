/**
 * Computes the mean of an iterable of numbers, ignoring null, undefined, and NaN values.
 *
 * @param iterable - The iterable of numbers to average.
 * @returns The mean, or `undefined` if there are no valid values.
 * @example
 * mean([1, 2, null, 3]) // 2
 */
export function mean(
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

  return count ? sum / count : undefined;
}
