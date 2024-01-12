import {flow} from "lodash/fp";

// @ts-ignore
import { map, safeProp, head } from "../util/book.js";

export const initial = flow(
    safeProp('name'),
    map(head),
)