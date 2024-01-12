import {filter} from "lodash/fp";
import {match} from "../util/basic";

export const filterQs = filter(match(/q/i));
