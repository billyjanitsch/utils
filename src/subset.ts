export function subset<T>(iterable: Iterable<T>, other: Iterable<T>): boolean {
  const otherSet = new Set(other);
  for (const value of iterable) {
    if (!otherSet.has(value)) return false;
  }
  return true;
}
