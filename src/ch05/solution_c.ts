// Refactor `fastestCar` using `compose()` and other functions in pointfree-style.

// fastestCar :: [Car] -> String
// const fastestCar = (cars) => {
//     const sorted = sortBy(car => car.horsepower, cars);
//     const fastest = last(sorted);
//     return concat(fastest.name, ' is the fastest');
// };

import {flow, prop, sortBy, last} from "lodash/fp";
import {append} from "../util/basic";

export const fastestCar = flow(
    sortBy(prop('horsepower')),
    last,
    prop('name'),
    append(' is the fastest'),
);