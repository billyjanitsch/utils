import type { Accessor } from "./types";

export function sumBy<T>(
  iterable: Iterable<T>,
  accessor: Accessor<T, number | null | undefined>,
): number | undefined {
  let sum = 0;
  let count = 0;
  let index = 0;

  for (const item of iterable) {
    const value = accessor(item, index++);
    if (value != null && !Number.isNaN(value)) {
      sum += value;
      ++count;
    }
  }

  return count ? sum : undefined;
}
