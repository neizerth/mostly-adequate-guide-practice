import { eitherWelcome } from "../solution_c";
// @ts-ignore
import { gary, theresa } from "../../util/book";

describe('Exercise C', () => {

    test('user access', () => {
        const access = eitherWelcome(gary);

        expect(access.$value).toBe( 'Your account is not active');
    });

    test('user access', () => {
        const access = eitherWelcome(theresa);

        expect(access.$value).toBe( 'Welcome Theresa');
    });
});