// Write the isomorphisms between String and [Char].
//
// As a reminder, the following functions are available in the exercise's context:
//
//   split :: String -> String -> [String]
//   intercalate :: String -> [String] -> String

import { split, intercalate, List, Either, map, IO, prop, head, join, traverse, sequence, identity } from "../util/book";
import {flow} from "lodash/fp";

// strToList :: String -> [Char]
export const strToList = split('');

// listToStr :: [Char] -> String
export const listToStr = intercalate('');