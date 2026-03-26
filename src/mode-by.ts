import type { Accessor } from "./types";

/**
 * Returns the most frequently occurring value produced by `accessor`, ignoring null, undefined, and NaN values.
 *
 * @param iterable - The iterable to search.
 * @param accessor - A function called with each element and its index that returns the value to compare.
 * @returns The modal accessor value, or `undefined` if there are no valid values.
 * @example
 * modeBy([{ v: 1 }, { v: 2 }, { v: 2 }], d => d.v) // 2
 */
export function modeBy<T, U>(
  iterable: Iterable<T>,
  accessor: Accessor<T, U>,
): U | undefined {
  const counts = new Map<U, number>();
  let index = 0;

  for (const item of iterable) {
    const value = accessor(item, index++);
    if (value != null && !Number.isNaN(value)) {
      counts.set(value, (counts.get(value) || 0) + 1);
    }
  }

  let modeValue: U | undefined;
  let modeCount = 0;

  for (const [value, count] of counts) {
    if (count > modeCount) {
      modeCount = count;
      modeValue = value;
    }
  }

  return modeValue;
}
