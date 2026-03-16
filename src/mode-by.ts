import type { Accessor } from "./types";

export function modeBy<T, U>(
  iterable: Iterable<T>,
  accessor: Accessor<T, U>,
): U | undefined {
  const counts = new Map<U, number>();
  let index = 0;

  for (const item of iterable) {
    const value = accessor(item, index++);
    if (value != null && !Number.isNaN(value)) {
      counts.set(value, (counts.get(value) || 0) + 1);
    }
  }

  let modeValue: U | undefined;
  let modeCount = 0;

  for (const [value, count] of counts) {
    if (count > modeCount) {
      modeCount = count;
      modeValue = value;
    }
  }

  return modeValue;
}
