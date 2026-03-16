export function intersection<T>(
  iterable: Iterable<T>,
  ...others: Iterable<T>[]
): Set<T> {
  const result = new Set(iterable);
  const otherSets = others.map((o) => new Set(o));
  outer: for (const value of result) {
    for (const other of otherSets) {
      if (!other.has(value)) {
        result.delete(value);
        continue outer;
      }
    }
  }
  return result;
}
