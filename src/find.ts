import type { Predicate } from "./types";

export function find<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): T | undefined {
  let index = 0;
  for (const item of iterable) {
    if (predicate(item, index++)) {
      return item;
    }
  }

  return undefined;
}
