/**
 * Returns the most frequently occurring value in `iterable`, ignoring null, undefined, and NaN values.
 *
 * @param iterable - The iterable to search.
 * @returns The modal value, or `undefined` if there are no valid values.
 */
export function mode<T>(
  iterable: Iterable<T | null | undefined>,
): T | undefined {
  const counts = new Map<T, number>();

  for (const value of iterable) {
    if (value != null && !Number.isNaN(value)) {
      counts.set(value, (counts.get(value) || 0) + 1);
    }
  }

  let modeValue: T | undefined;
  let modeCount = 0;

  for (const [value, count] of counts) {
    if (count > modeCount) {
      modeCount = count;
      modeValue = value;
    }
  }

  return modeValue;
}
