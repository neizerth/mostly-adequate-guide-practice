import { initial } from "../solution_b";

// @ts-ignore
import { albert } from "../../util/book";

describe('Exercise B', () => {
   test('Checking user initials', () => {

       const result = initial(albert);

       // @ts-ignore
       expect(result.$value).toEqual('A');
   });
});