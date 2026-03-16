export function includes<T>(iterable: Iterable<T>, value: T): boolean {
  for (const item of iterable) {
    if (item === value) {
      return true;
    }
  }

  return false;
}
