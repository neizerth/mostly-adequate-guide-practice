import { words } from "../solution_a";

describe('Exercise A', () => {
   test('splitting by comma', () => {
       const result = words('Jack Bob Nick');
       expect(result).toEqual(['Jack','Bob', 'Nick']);
   });
});