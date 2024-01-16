import { safeAdd } from "../solution_b";
// @ts-ignore
import { Maybe } from "../../util/book.js";

describe('Exercise B', () => {
    test('checking base call', () => {
        const spy = jest.spyOn(Maybe.prototype, 'ap');
        const result = safeAdd(Maybe.of(2), Maybe.of(3));

        expect(result).toBeInstanceOf(Maybe);
        expect(typeof result.$value).toBe('number');
        expect(spy).toHaveBeenCalled();
    });

    test('adding 2 Maybe instances', () => {
        const result = safeAdd(Maybe.of(2), Maybe.of(3));
        expect(result.$value).toBe(5);
    });

    test('isNothing', () => {
        const result = safeAdd(Maybe.of(null), Maybe.of(3));
        expect(result.isNothing).toBe(true);
    });

    test('isNothing 2', () => {
        const result = safeAdd(Maybe.of(2), Maybe.of(null));
        expect(result.isNothing).toBe(true);
    });
});