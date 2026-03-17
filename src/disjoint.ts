export function disjoint<T>(
  iterable: Iterable<T>,
  other: Iterable<T>,
): boolean {
  const set = new Set(iterable);
  for (const value of other) {
    if (set.has(value)) return false;
  }
  return true;
}
