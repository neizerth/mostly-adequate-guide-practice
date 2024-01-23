import { getJsons } from "../solution_a";
// @ts-ignore
import { routes, Task, identity } from "../../util/book.js";

describe('Exercise A', () => {
    test('basic call', () => {
        const result = getJsons(routes);
        expect(result).toBeInstanceOf(Task)
    });

    test('checking result', done => {
        const task = getJsons(routes);

        task.fork(identity, result => {
            expect(result.$value).toEqual({
                '/' : 'json for /',
                '/about': 'json for /about'
            });
            done();
        })
    });


});