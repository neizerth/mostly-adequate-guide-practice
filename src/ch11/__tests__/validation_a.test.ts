import { eitherToMaybe } from "../solution_a";
// @ts-ignore
import { Maybe, Either, left } from "../../util/book.js";

describe('Exercise A', () => {
    test('checking base call', () => {
        const result = eitherToMaybe(Either.of('one eyed willy'));

        expect(result).toBeInstanceOf(Maybe);
        expect(result.isJust).toBe(true);
        expect(result.$value).toBe('one eyed willy');
    });

    test('adding 2 Maybe instances', () => {
        const result = eitherToMaybe(left('some error'));

        expect(result).toBeInstanceOf(Maybe);
        expect(result.isNothing).toBe(true);
    });
});