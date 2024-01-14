// Considering a User object as follow:
//
//   const user = {
//     id: 1,
//     name: 'Albert',
//     address: {
//       street: {
//         number: 22,
//         name: 'Walnut St',
//       },
//     },
//   };
//
// Use `safeProp` and `map/join` or `chain` to safely get the street name when given a user

// @ts-ignore
import { chain, safeProp } from "../util/book";

import {flow} from "lodash/fp";

const chainedProp = (prop: string) => chain(safeProp(prop));

const log = (prefix: string) => (value: any) => {
    console.log(`${prefix}: ${JSON.stringify(value)}`);
    return value;
}

// getStreetName :: User -> Maybe String
export const getStreetName = flow(
    safeProp('address'),
    chainedProp('street'),
    chainedProp('name'),
);