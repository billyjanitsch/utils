import type { Predicate } from "./types";

export function every<T>(
  iterable: Iterable<T>,
  predicate: Predicate<T>,
): boolean {
  let index = 0;
  for (const item of iterable) {
    if (!predicate(item, index++)) {
      return false;
    }
  }

  return true;
}
