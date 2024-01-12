import { curry } from "lodash";

export { flowRight as compose } from "lodash/fp";

export const match = curry(
    (re: RegExp, str: string) => str.match(re)
);

export const append = curry(
    (str1: string, str2: string) => str2.concat(str1)
)