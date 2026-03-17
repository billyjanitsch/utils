/**
 * Clamps `value` to the range [`minimum`, `maximum`].
 *
 * @param value - The number to clamp.
 * @param minimum - The lower bound.
 * @param maximum - The upper bound.
 * @returns The clamped value.
 */
export function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum);
}
