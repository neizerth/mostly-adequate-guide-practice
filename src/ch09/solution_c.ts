// For this exercise, we consider helpers with the following signatures:
//
//   validateEmail :: Email -> Either String Email
//   addToMailingList :: Email -> IO([Email])
//   emailBlast :: [Email] -> IO ()
//
// Use `validateEmail`, `addToMailingList` and `emailBlast` to create a function
// which adds a new email to the mailing list if valid, and then notify the whole
// list.

import { validateEmail, addToMailingList, emailBlast, map, either, left, chain, Either, IO } from "../util/book";
import { flow } from "lodash/fp";

const processEmail = flow(
    addToMailingList,
    chain(emailBlast),
);

// joinMailingList :: Email -> Either String (IO ())
export const joinMailingList = flow(
    validateEmail,
    map(processEmail),
);