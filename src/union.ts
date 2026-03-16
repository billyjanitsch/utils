export function union<T>(...iterables: Iterable<T>[]): Set<T> {
  const result = new Set<T>();
  for (const iterable of iterables) {
    for (const value of iterable) {
      result.add(value);
    }
  }
  return result;
}
