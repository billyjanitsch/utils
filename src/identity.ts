/**
 * Returns its argument unchanged.
 *
 * @param x - Any value.
 * @returns `x`.
 * @example
 * identity(42) // 42
 */
export function identity<T>(x: T): T {
  return x;
}
