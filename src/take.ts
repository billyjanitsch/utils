/**
 * Returns the first `count` elements of an iterable.
 *
 * @param iterable - The iterable to take from.
 * @param count - The number of elements to take.
 * @returns An array of the first `count` elements.
 */
export function take<T>(iterable: Iterable<T>, count: number): T[] {
  const array = [];

  for (const item of iterable) {
    if (array.length >= count) break;
    array.push(item);
  }

  return array;
}
