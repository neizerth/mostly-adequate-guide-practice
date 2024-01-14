// We now consider the following items:
//
//   // getFile :: IO String
//   const getFile = IO.of('/home/mostly-adequate/ch09.md');
//
//   // pureLog :: String -> IO ()
//   const pureLog = str => new IO(() => console.log(str));
//
// Use getFile to get the filepath, remove the directory and keep only the basename,
// then purely log it. Hint: you may want to use `split` and `last` to obtain the
// basename from a filepath.

// logFilename :: IO ()
// const logFilename = undefined;

// @ts-ignore
import { getFile, pureLog, chain, split, last } from "../util/book";
import { flow } from "lodash/fp";

const getFilename = flow(
    split('/'),
    last
);

const getIOFilename = flow(
    chain(getFilename),
    pureLog
);

export const logFilename = getIOFilename(getFile);