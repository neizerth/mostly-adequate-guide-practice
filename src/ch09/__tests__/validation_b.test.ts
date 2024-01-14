import { logFilename } from "../solution_b";

// @ts-ignore
import { IO } from "../../util/book.js";

describe('Exercise B', () => {
    test('Checking logFilename', () => {

        expect(logFilename).toBeInstanceOf(IO);

        const result = logFilename.unsafePerformIO();

        // @ts-ignore
        expect(result).toBe('ch09.md');
    });
});