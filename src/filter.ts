import type { Predicate } from "./types";

export function filter<T>(iterable: Iterable<T>, predicate: Predicate<T>): T[] {
  const array = [];

  let index = 0;
  for (const item of iterable) {
    if (predicate(item, index++)) {
      array.push(item);
    }
  }

  return array;
}
