/**
 * Filters a map to entries for which `predicate` returns true.
 *
 * @param map - The map to filter.
 * @param predicate - A function called with each value and key.
 * @returns A new map containing only the entries that passed the predicate.
 */
export function filterMap<K, V>(
  map: Map<K, V>,
  predicate: (value: V, key: K) => boolean,
): Map<K, V> {
  const result = new Map<K, V>();

  for (const [key, value] of map) {
    if (predicate(value, key)) {
      result.set(key, value);
    }
  }

  return result;
}
