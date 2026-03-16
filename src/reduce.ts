import type { Reducer } from "./types";

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
