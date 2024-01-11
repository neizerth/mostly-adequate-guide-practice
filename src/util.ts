import _ from "lodash";

// Swaps 1 and 2 arguments
const rearg2to1 = _.partial(_.rearg, _, [1, 0]);

// curries function with 2 arity
const curry2 = _.partial(_.curry, _, 2);

export const split = curry2(
    rearg2to1(_.split)
);

export const match = curry2(
    (re: RegExp, str: string) => str.match(re)
);

export const filter = curry2(
    rearg2to1(_.filter)
);

export { reduce } from "lodash/fp";