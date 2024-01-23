// Using `eitherToTask`, simplify `findNameById` to remove the nested `Either`.
//
//   // eitherToTask :: Either a b -> Task a b
//   const eitherToTask = either(Task.rejected, Task.of);

// findNameById :: Number -> Task Error (Either Error User)
import {flow} from "lodash/fp";

// @ts-ignore
import { map, prop, findUserById, eitherToTask, chain } from "../util/book";

export const findNameById = flow(
    findUserById,
    chain(eitherToTask),
    map(prop('name')),
);