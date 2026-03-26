/**
 * Clamps `value` to the range [`minimum`, `maximum`].
 *
 * @param value - The number to clamp.
 * @param minimum - The lower bound.
 * @param maximum - The upper bound.
 * @returns The clamped value.
 * @example
 * clamp(15, 0, 10) // 10
 * clamp(-5, 0, 10) // 0
 */
export function clamp(value: number, minimum: number, maximum: number): number {
  return Math.min(Math.max(value, minimum), maximum);
}
