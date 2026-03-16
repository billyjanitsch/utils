export type Accessor<T, U> = (item: T, index: number) => U;
export type Comparator<T> = (a: T, b: T) => number;
export type Interpolator<T> = (input: number) => T;
export type Predicate<T> = (item: T, index: number) => boolean;
export type Reducer<T, U> = (accumulation: U, item: T, index: number) => U;
