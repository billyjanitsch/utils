/**
 * Calls `callback` for each item in an iterable.
 *
 * @param iterable - The iterable to iterate over.
 * @param callback - A function called with each item and its index.
 * @example
 * forEach(['a', 'b'], (item, i) => console.log(i, item)) // logs "0 a", "1 b"
 */
export function forEach<T>(
  iterable: Iterable<T>,
  callback: (item: T, index: number) => void,
): void {
  let index = 0;
  for (const item of iterable) {
    callback(item, index++);
  }
}
