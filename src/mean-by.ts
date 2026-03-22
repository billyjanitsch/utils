import type { Accessor } from "./types";

/**
 * Computes the mean of values returned by `accessor`, ignoring null, undefined, and NaN values.
 *
 * @param iterable - The iterable to average.
 * @param accessor - A function called with each element and its index that returns a numeric value.
 * @returns The mean, or `undefined` if there are no valid values.
 */
export function meanBy<T>(
  iterable: Iterable<T>,
  accessor: Accessor<T, number | null | undefined>,
): number | undefined {
  let sum = 0;
  let count = 0;
  let index = 0;

  for (const item of iterable) {
    const value = accessor(item, index++);
    if (value != null && !Number.isNaN(value)) {
      sum += value;
      ++count;
    }
  }

  return count ? sum / count : undefined;
}
