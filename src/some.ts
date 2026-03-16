import type { Predicate } from "./types";

export function some<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): boolean {
  let index = 0;
  for (const item of iterable) {
    if (predicate(item, index++)) {
      return true;
    }
  }

  return false;
}
