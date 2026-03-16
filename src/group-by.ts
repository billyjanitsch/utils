import type { Accessor } from "./types";

export function groupBy<T, K>(
  iterable: Iterable<T>,
  key: Accessor<T, K>,
): Map<K, T[]> {
  const map = new Map<K, T[]>();

  let index = 0;
  for (const item of iterable) {
    const k = key(item, index++);
    const group = map.get(k);
    if (group) {
      group.push(item);
    } else {
      map.set(k, [item]);
    }
  }

  return map;
}
