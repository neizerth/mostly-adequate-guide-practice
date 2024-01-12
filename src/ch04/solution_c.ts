import _ from "lodash";
import {reduce} from "lodash/fp";
const keepHighest = (x: number, y: number) => x >= y ? x : y;

export const max = reduce(
    keepHighest,
    -Infinity
);