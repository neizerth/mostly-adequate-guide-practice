import { averageDollarValue } from "../solution_b";
import cars from "../cars";

describe('Exercise B', () => {
   test('Checking full average value', () => {
       const result = averageDollarValue(cars);

       expect(result).toEqual(790700);
   });
});