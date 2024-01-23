// Rewrite `safeAdd` from exercise_a to use `liftA2` instead of `ap`.

// @ts-ignore
import { add, liftA2 } from '../util/book';

// safeAdd :: Maybe Number -> Maybe Number -> Maybe Number
export const safeAdd = liftA2(add);