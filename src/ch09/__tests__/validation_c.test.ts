import { joinMailingList } from "../solution_c";
// @ts-ignore
import { Either, IO, identity, either, unsafePerformIO } from "../../util/book";


const getResult = either(identity, unsafePerformIO);

describe('Exercise C', () => {

    test('simple check', () => {
        const result = joinMailingList('email@email.com')

        expect(result).toBeInstanceOf(Either);
        expect(result.$value.unsafePerformIO()).not.toBeInstanceOf(IO);
    });

    test('result', () => {
        const result = joinMailingList('sleepy@grandpa.net');

        expect(getResult(result)).toBe('sleepy@grandpa.net');
    });

    test('wrong result', () => {
        const result = joinMailingList('notanemail');
        console.log(result);

        expect(getResult(result)).toBe('invalid email');
    });
});