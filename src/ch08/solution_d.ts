// We now consider the following functions:
//
//   // validateUser :: (User -> Either String ()) -> User -> Either String User
//   const validateUser = curry((validate, user) => validate(user).map(_ => user));
//
//   // save :: User -> IO User
//   const save = user => new IO(() => ({ ...user, saved: true }));
//
// Write a function `validateName` which checks whether a user has a name longer than 3 characters
// or return an error message. Then use `either`, `showWelcome` and `save` to write a `register`
// function to signup and welcome a user when the validation is ok.
//
// Remember either's two arguments must return the same type.

// @ts-ignore
import { validateUser, showWelcome, either, save, identity, left, map, Either, IO } from '../util/book';
// import {unary} from "lodash";
import {flow, prop, lt} from "lodash/fp";
import {curry} from "lodash";
import {append} from "../util/basic";

const log = curry((msg: string, x: any) => {
    console.log(msg, x);
    return x;
});

const isValidName = flow(
    prop('length'),
    lt(3)
);

const validate = curry(
    (fn: CallableFunction, msg: string, xs: any) =>
        fn(xs) ? Either.of(xs) : left(msg)
);

// validateName :: User -> Either String ()
export const validateName = validate(
    flow(
        prop('name'),
        isValidName,
    ),
    'Invalid name'
)

// register :: User -> IO String
export const register = flow(
    validateUser(validateName),
    either(
        IO.of,
        flow(
            save,
            map(showWelcome)
        )
    )
    // ?
);