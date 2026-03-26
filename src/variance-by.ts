import type { Accessor } from "./types";

/**
 * Computes the variance of values returned by `accessor`, ignoring null, undefined, and NaN values.
 *
 * @param iterable - The iterable to compute the variance of.
 * @param accessor - A function called with each element and its index that returns a numeric value.
 * @returns The variance, or `undefined` if there are no valid values.
 * @example
 * varianceBy([{ v: 2 }, { v: 8 }], d => d.v) // 9
 */
export function varianceBy<T>(
  iterable: Iterable<T>,
  accessor: Accessor<T, number | null | undefined>,
): number | undefined {
  let count = 0;
  let mean = 0;
  let m2 = 0;
  let index = 0;

  for (const item of iterable) {
    const value = accessor(item, index++);
    if (value != null && !Number.isNaN(value)) {
      ++count;
      const delta = value - mean;
      mean += delta / count;
      m2 += delta * (value - mean);
    }
  }

  return count ? m2 / count : undefined;
}
