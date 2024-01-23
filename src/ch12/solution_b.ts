// Using traversable, and the `validate` function, update `startGame` (and its signature)
// to only start the game if all players are valid
//
//   // validate :: Player -> Either String Player
//   validate = player => (player.name ? Either.of(player) : left('must have name'));

// @ts-ignore
import { Either, always, traverse, left, map, compose, validate, either, identity } from "../util/book";
import {flow} from "lodash/fp";

// startGame :: [Player] -> [Either Error String]
// export const startGame = compose(
//     map(map(
//         always('game started!')
//     )),
//     map(always)
// );

export const startGame = flow(
    traverse(Either.of, validate),
    map(always('game started!'))
);