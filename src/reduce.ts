import type { Reducer } from "./types";

/**
 * Reduces an iterable to a single value by applying `reducer` to each element.
 *
 * @param iterable - The iterable to reduce.
 * @param reducer - A function called with the accumulator, current element, and its index.
 * @param initialValue - The initial accumulator value.
 * @returns The final accumulated value.
 */
export function reduce<T, U>(
  iterable: Iterable<T>,
  reducer: Reducer<T, U>,
  initialValue: U,
): U {
  let acc = initialValue;

  let index = 0;
  for (const item of iterable) {
    acc = reducer(acc, item, index++);
  }

  return acc;
}
