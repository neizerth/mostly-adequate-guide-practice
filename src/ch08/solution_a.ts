// Use `add` and `map` to make a function that increments a value inside a functor.

// incrF :: Functor f => f Int -> f Int
// const incrF = undefined;

import {add} from "lodash/fp";

// @ts-ignore
import { map } from "../util/book.js";

export const incrF = map(add(1));
