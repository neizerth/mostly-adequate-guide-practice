// Considering the following functions:
//
//   readfile :: String -> String -> Task Error String
//   readdir :: String -> Task Error [String]
//   safeHead :: [String] -> Maybe String
//
// Use traversable to rearrange and flatten the nested Tasks & Maybe

// Traversable: Right (undefined), Left, Identity, Map, List, Maybe

// @ts-ignore
import { map, compose, readfile, safeHead, readdir, traverse, Task, Identity, List, Maybe, chain } from "../util/book";
import {flow} from "lodash/fp";

export const readFirst = flow(
    readdir,
    map(safeHead),
    chain(traverse(Task.of, readfile('utf-8')))
);