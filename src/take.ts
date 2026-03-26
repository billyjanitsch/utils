/**
 * Returns the first `count` elements of an iterable.
 *
 * @param iterable - The iterable to take from.
 * @param count - The number of elements to take.
 * @returns An array of the first `count` elements.
 * @example
 * take([1, 2, 3, 4], 2) // [1, 2]
 */
export function take<T>(iterable: Iterable<T>, count: number): T[] {
  const result = [];

  for (const item of iterable) {
    if (result.length >= count) break;
    result.push(item);
  }

  return result;
}
