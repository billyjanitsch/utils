import { variance } from "./variance";

/**
 * Computes the standard deviation of an iterable of numbers, ignoring null, undefined, and NaN values.
 *
 * @param iterable - The iterable of numbers to compute the standard deviation of.
 * @returns The standard deviation, or `undefined` if there are no valid values.
 * @example
 * deviation([2, 8]) // 3
 */
export function deviation(
  iterable: Iterable<number | null | undefined>,
): number | undefined {
  const v = variance(iterable);
  return v !== undefined ? Math.sqrt(v) : undefined;
}
