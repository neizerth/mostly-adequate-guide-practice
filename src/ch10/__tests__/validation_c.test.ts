import { startGame } from "../solution_c";
// @ts-ignore
import { IO, albert, theresa } from "../../util/book";

describe('Exercise C', () => {

    test('simple check', () => {

        expect(startGame).toBeInstanceOf(IO);
    });

    test('result', () => {

        const result = startGame.unsafePerformIO();

        expect(typeof result).toBe('string');
        expect(result).toBe(`${albert.name} vs ${theresa.name}`);
    });


});