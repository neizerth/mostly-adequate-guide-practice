import { validateName, register } from "../solution_d";
// @ts-ignore
import { gary, albert, yi, Either, IO, showWelcome } from "../../util/book";

describe('Exercise D', () => {

    test('validate gary', () => {
        const result = validateName(gary);

        expect(result).toBeInstanceOf(Either);
        expect(result.isRight).toBe(true);
    });

    test('validate yi', () => {
        const result = validateName(yi);

        expect(result).toBeInstanceOf(Either);
        expect(result.isLeft).toBe(true);
        expect(typeof result.$value).toBe('string');
    });

    test('Albert message', () => {
        const result = register(albert);
        const message = result.unsafePerformIO();

        expect(result).toBeInstanceOf(IO);
        expect(typeof message).toBe('string');
        expect(message).toBe(showWelcome(albert));
    });

    test('Yi message', () => {
        const result = register(yi);
        const message = result.unsafePerformIO();

        expect(result).toBeInstanceOf(IO);
        expect(typeof message).toBe('string');
    });
});