export function ascending(a: unknown, b: unknown): number {
  if (a == null || b == null) return NaN;
  if (a < b) return -1;
  if (a > b) return 1;
  if (a >= b) return 0;
  return NaN;
}
