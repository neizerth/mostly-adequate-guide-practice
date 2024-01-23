import { readFirst } from "../solution_c";
// @ts-ignore
import { Task, Maybe, identity, albert, theresa } from "../../util/book";

describe('Exercise C', () => {

    test.only('simple check', done => {
        const result = readFirst('__dirname')
        expect(result).toBeInstanceOf(Task);
        result.fork(identity, (res: Maybe) => {
            expect(res).toBeInstanceOf(Maybe);
            expect(res.isJust).toBe(true);
            expect(res.$value).toBe('content of file1 (utf-8)');
            done();
        })
    });


});