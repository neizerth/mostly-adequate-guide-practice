import { findNameById } from "../solution_b";
// @ts-ignore
import { Maybe, Task, Either, identity, albert } from "../../util/book.js";

describe('Exercise B', () => {
    test('checking base call', () => {
        const result = findNameById(1);
        expect(result).toBeInstanceOf(Task);
    });

    test('forking result', done => {
        const result = findNameById(albert.id);

        result.fork(identity, value => {
            expect(value).not.toBeInstanceOf(Task);
            expect(value).not.toBeInstanceOf(Either);
            expect(value).toBe(albert.name);
            done();
        });
    });
});