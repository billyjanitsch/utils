export function intersection<T>(
  iterable: Iterable<T>,
  ...others: Iterable<T>[]
): Set<T> {
  const result = new Set(iterable);
  for (const other of others) {
    const otherSet = new Set(other);
    for (const value of result) {
      if (!otherSet.has(value)) {
        result.delete(value);
      }
    }
  }
  return result;
}
