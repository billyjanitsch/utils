import type { Accessor } from "./types";

/**
 * Counts elements of `iterable` by the key returned by `key`.
 *
 * @param iterable - The iterable to count.
 * @param key - A function called with each element and its index that returns the group key.
 * @returns A map from each key to the number of elements with that key.
 * @example
 * countBy(['a', 'b', 'a'], x => x) // Map { 'a' => 2, 'b' => 1 }
 */
export function countBy<T, K>(
  iterable: Iterable<T>,
  key: Accessor<T, K>,
): Map<K, number> {
  const map = new Map<K, number>();

  let index = 0;
  for (const item of iterable) {
    const k = key(item, index++);
    map.set(k, (map.get(k) ?? 0) + 1);
  }

  return map;
}
