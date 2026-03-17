import type { Accessor } from "./types";

/**
 * Indexes elements of `iterable` by the key returned by `key`. When multiple
 * elements share a key, the last one wins.
 *
 * @param iterable - The iterable to index.
 * @param key - A function called with each element and its index that returns the key.
 * @returns A map from each key to the last element with that key.
 */
export function keyBy<T, K>(
  iterable: Iterable<T>,
  key: Accessor<T, K>,
): Map<K, T> {
  const map = new Map<K, T>();

  let index = 0;
  for (const item of iterable) {
    map.set(key(item, index++), item);
  }

  return map;
}
