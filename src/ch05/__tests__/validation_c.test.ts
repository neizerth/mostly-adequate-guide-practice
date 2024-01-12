import { fastestCar } from "../solution_c";
import cars from "../cars";

describe('Exercise C', () => {

    test('Checking the fastest car', () => {
        const car = fastestCar(cars);

        expect(car).toBe('Aston Martin One-77 is the fastest');
    });
});