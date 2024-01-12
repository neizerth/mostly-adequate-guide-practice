import {flow, map, prop, reduce, add} from "lodash/fp";
const average = (xs: number[]) => reduce(add, 0, xs) / xs.length;
export const averageDollarValue = flow(
    map(prop('dollar_value')),
    average,
);