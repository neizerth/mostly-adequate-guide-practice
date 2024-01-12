import {filter} from "lodash/fp";
import {match} from "../util";

export const filterQs = filter(match(/q/i));
