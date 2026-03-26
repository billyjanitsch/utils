/**
 * Returns elements from `iterable` at the specified `indices`. Negative indices count from the end.
 *
 * @param iterable - The iterable to select from.
 * @param indices - The indices to select. Out-of-bounds indices are silently skipped.
 * @returns An array of elements at the given indices, in the order the indices were provided.
 * @example
 * at([10, 20, 30], [0, 2])   // [10, 30]
 * at([10, 20, 30], [-1, -2]) // [30, 20]
 */
export function at<T>(iterable: Iterable<T>, indices: Iterable<number>): T[] {
  const array = Array.from(iterable);
  const result = [];

  for (const index of indices) {
    const i = index < 0 ? array.length + index : index;
    if (i >= 0 && i < array.length) {
      result.push(array[i]);
    }
  }

  return result;
}
