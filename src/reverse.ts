export function reverse<T>(iterable: Iterable<T>): T[] {
  return Array.from(iterable).reverse();
}
