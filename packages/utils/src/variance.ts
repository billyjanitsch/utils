/**
 * Computes the variance of an iterable of numbers, ignoring null, undefined, and NaN values.
 *
 * @param iterable - The iterable of numbers to compute the variance of.
 * @returns The variance, or `undefined` if there are no valid values.
 */
export function variance(
  iterable: Iterable<number | null | undefined>,
): number | undefined {
  let count = 0;
  let mean = 0;
  let m2 = 0;

  for (const value of iterable) {
    if (value != null && !Number.isNaN(value)) {
      ++count;
      const delta = value - mean;
      mean += delta / count;
      m2 += delta * (value - mean);
    }
  }

  return count ? m2 / count : undefined;
}
