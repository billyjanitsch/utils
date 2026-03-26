/**
 * Returns a new array with elements of `iterable` in reverse order.
 *
 * @param iterable - The iterable to reverse.
 * @returns A new reversed array.
 * @example
 * reverse([1, 2, 3]) // [3, 2, 1]
 */
export function reverse<T>(iterable: Iterable<T>): T[] {
  return Array.from(iterable).reverse();
}
