// Considering the following elements:
//
//   // httpGet :: Route -> Task Error JSON
//   // routes :: Map Route Route
//   const routes = new Map({ '/': '/', '/about': '/about' });
//
// Use the traversable interface to change the type signature of `getJsons`.
//
//   getJsons :: Map Route Route -> Task Error (Map Route JSON)

// @ts-ignore
import {append, reduce, map, httpGet, Task, chain, Map, identity, routes, sequence, traverse } from "../util/book";

// getJsons :: Map Route Route -> Map Route (Task Error JSON)
export const getJsons = traverse(Task.of, httpGet);
