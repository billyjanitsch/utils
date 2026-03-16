export function descending(a: unknown, b: unknown): number {
  if (a == null || b == null) return NaN;
  if (b < a) return -1;
  if (b > a) return 1;
  if (b >= a) return 0;
  return NaN;
}
