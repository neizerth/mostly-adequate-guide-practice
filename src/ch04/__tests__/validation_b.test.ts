import { filterQs } from "../solution_b";

describe('Exercise B', () => {
   test('Filtering plural forms', () => {
       const result = filterQs(['quick', 'camels', 'quarry', 'over', 'quails']);

       expect(result).toEqual(['quick', 'quarry', 'quails']);
   });
});