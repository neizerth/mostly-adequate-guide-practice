import { incrF } from "../solution_a";
// @ts-ignore
import { Identity } from "../../util/book.js";

describe('Exercise A', () => {
    test('checking last in stock first 3 cars', () => {
        const result = incrF(Identity.of(2)).$value;
        expect(result).toBe(3);
    });
});