// Write a natural transformation that converts `Either b a` to `Maybe a`

import { either, Maybe, nothing, always } from '../util/book';
import {flow} from "lodash/fp";

// eitherToMaybe :: Either b a -> Maybe a
export const eitherToMaybe = either(
    always(nothing),
    Maybe.of
);