/** A function that maps an item and its index to a value. */
export type Accessor<T, U> = (item: T, index: number) => U;

/** A function that compares two values for ordering. */
export type Comparator<T> = (a: T, b: T) => number;

/** A function that tests an item and its index. */
export type Predicate<T> = (item: T, index: number) => boolean;

/** A function that folds an item and its index into an accumulator. */
export type Reducer<T, U> = (accumulation: U, item: T, index: number) => U;
