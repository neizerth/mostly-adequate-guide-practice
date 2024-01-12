import { flow, prop, last } from "lodash/fp"

export const isLastInStock = flow(
    last,
    prop('in_stock')
);