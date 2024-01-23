import { strToList, listToStr } from "../solution_c";
// @ts-ignore
import { sortBy, compose, identity, List } from "../../util/book";
import {result} from "lodash";

describe('Exercise C', () => {

    test('strToList', () => {
        const result = strToList('sortme');
        expect(result).toEqual(['s', 'o', 'r', 't', 'm', 'e']);
    });

    test('listToStr', () => {
        const list = strToList('sortme');
        const result = listToStr(list);

        expect(result).toBe('sortme');
    });

    test('simple check', () => {

        const sortLetters = compose(listToStr, sortBy(identity), strToList);
        const result = sortLetters('sortme');

        expect(result).toBe('emorst');
    });

});