export function difference<T>(
  iterable: Iterable<T>,
  ...others: Iterable<T>[]
): Set<T> {
  const result = new Set(iterable);
  for (const other of others) {
    for (const value of other) {
      result.delete(value);
    }
  }
  return result;
}
