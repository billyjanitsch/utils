import type { Accessor } from "./types";

export function map<T, U>(iterable: Iterable<T>, mapper: Accessor<T, U>): U[] {
  return Array.from(iterable, mapper);
}
