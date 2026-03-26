/**
 * Filters a map to entries for which `predicate` returns true.
 *
 * @param map - The map to filter.
 * @param predicate - A function called with each value and key.
 * @returns A new map containing only the entries that passed the predicate.
 * @example
 * filterMap(new Map([['a', 1], ['b', 2]]), v => v > 1) // Map { 'b' => 2 }
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
