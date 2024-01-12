import cars from "../cars";
import { isLastInStock } from "../solution_a";

describe('Exercise A', () => {
    test('checking last in stock first 3 cars', () => {
        const isLast = isLastInStock(cars.slice(0, 3));
        expect(isLast).toBe(true);
    });
    test('checking last in stock rest', () => {
        const isLast = isLastInStock(cars.slice(3));
        expect(isLast).toBe(false);
    });
});