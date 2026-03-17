/**
 * Splits an iterable into chunks of the given size.
 *
 * @param iterable - The iterable to chunk.
 * @param size - The size of each chunk. Must be a positive integer.
 * @returns An array of arrays, each of length `size` (the last may be smaller).
 */
export function chunk<T>(iterable: Iterable<T>, size: number): T[][] {
  if (!Number.isInteger(size) || size <= 0) {
    throw new RangeError("Size must be a positive integer");
  }

  const result: T[][] = [];
  let current: T[] = [];

  for (const item of iterable) {
    current.push(item);
    if (current.length === size) {
      result.push(current);
      current = [];
    }
  }

  if (current.length > 0) {
    result.push(current);
  }

  return result;
}
