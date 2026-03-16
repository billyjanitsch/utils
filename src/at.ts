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
