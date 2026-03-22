/**
 * Skips the first `count` elements of an iterable and returns the rest.
 *
 * @param iterable - The iterable to drop from.
 * @param count - The number of elements to drop.
 * @returns An array of all elements after the first `count`.
 */
export function drop<T>(iterable: Iterable<T>, count: number): T[] {
  const result = [];

  let skipped = 0;
  for (const item of iterable) {
    if (skipped < count) {
      skipped++;
    } else {
      result.push(item);
    }
  }

  return result;
}
