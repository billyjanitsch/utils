import type { Comparator } from "./types";

export function sort<T>(iterable: Iterable<T>, comparator: Comparator<T>): T[] {
  return Array.from(iterable).sort(comparator);
}
