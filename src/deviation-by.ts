import type { Accessor } from "./types";
import { varianceBy } from "./variance-by";

/**
 * Computes the standard deviation of values returned by `accessor`, ignoring null, undefined, and NaN values.
 *
 * @param iterable - The iterable to compute the standard deviation of.
 * @param accessor - A function called with each element and its index that returns a numeric value.
 * @returns The standard deviation, or `undefined` if there are no valid values.
 * @example
 * deviationBy([{ v: 2 }, { v: 8 }], d => d.v) // 3
 */
export function deviationBy<T>(
  iterable: Iterable<T>,
  accessor: Accessor<T, number | null | undefined>,
): number | undefined {
  const v = varianceBy(iterable, accessor);
  return v !== undefined ? Math.sqrt(v) : undefined;
}
