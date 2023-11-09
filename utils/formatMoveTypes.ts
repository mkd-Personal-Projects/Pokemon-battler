import { RawMoves } from "../db/data/tsPokemonTypes";

export const formatMoveTypes = (moves: RawMoves) => {
  return Object.values(moves).reduce(
    (accumulator: { move: string; type: string }[], move) => {
      if (move.basePower) {
        return [...accumulator, { move: move.name, type: move.type }];
      }
      return accumulator;
    },
    []
  );
};
