/**
 * Creates an array of numbers from `start` to `end` (exclusive).
 *
 * @param start - The start of the range (inclusive).
 * @param end - The end of the range (exclusive).
 * @param step - The step between each number. Defaults to `1`.
 * @returns An array of numbers.
 */
export function range(start: number, end: number, step = 1): number[] {
  if (step === 0) {
    throw new RangeError("Step must be nonzero");
  }

  const length = Math.max(0, Math.ceil((end - start) / step));
  const result = new Array<number>(length);

  for (let i = 0; i < length; i++) {
    result[i] = start + i * step;
  }

  return result;
}
