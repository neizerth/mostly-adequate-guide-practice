import { getStreetName } from "../solution_a";
// @ts-ignore
import { albert, gary, theresa } from "../../util/book.js";

describe('Exercise A', () => {
    test('checking Albert street name', () => {
        const result = getStreetName(albert).$value;
        expect(result).toBe('Walnut St');
    });
    test('checking Theresa street name', () => {
        const result = getStreetName(theresa);
        expect(result.isNothing).toBe(true);
    });
    test('checking Gary street name', () => {
        const result = getStreetName(gary);
        expect(result.isNothing).toBe(true);
    });
});