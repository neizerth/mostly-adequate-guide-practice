// Write a function that adds two possibly null numbers together using `Maybe` and `ap`.

import { Maybe, add } from '../util/book';

// safeAdd :: Maybe Number -> Maybe Number -> Maybe Number
export const safeAdd = (m1: Maybe, m2: Maybe) =>
    Maybe.of(add).ap(m1).ap(m2);