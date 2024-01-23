import { startGame } from "../solution_b";
// @ts-ignore
import {Either, List, albert, theresa, gary} from "../../util/book.js";

describe('Exercise B', () => {
    test('checking base call', () => {
        const result = startGame(new List([albert, theresa]));

        expect(result).toBeInstanceOf(Either);
        expect(result.isRight).toBe(true);

        expect(result.$value).toBe('game started!');
    });

    test('nameless', () => {
        const result = startGame(new List([gary, { what: 14 }]));

        expect(result.isLeft).toBe(true);
        expect(result.$value).toBe('must have name');
    })
});