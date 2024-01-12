// @ts-ignore
import { checkActive, showWelcome, map } from '../util/book';
import {flow} from "lodash/fp";

export const eitherWelcome = flow(
    checkActive,
    map(showWelcome)
);