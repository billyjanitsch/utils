import type { Accessor } from "./types";

/**
 * Groups elements of `iterable` by the key returned by `key`.
 *
 * @param iterable - The iterable to group.
 * @param key - A function called with each element and its index that returns the group key.
 * @returns A map from each key to the array of elements with that key.
 */
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
