import {curry, rearg} from "lodash";
import { partial } from "lodash/fp";

export const match = curry(
    (re: RegExp, str: string) => str.match(re)
);

export const concat = curry(
    String.prototype.concat,
    2
)

export const append = curry(
    (s1: string, s2: string) => s2.concat(s1)
);