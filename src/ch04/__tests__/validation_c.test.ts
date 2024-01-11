import { max } from "../solution_c";

describe('Exercise C', () => {

    test('Checking max result', () => {
        const result = max([323, 523, 554, 123, 5234]);

        expect(result).toBe(5234);
    });
});