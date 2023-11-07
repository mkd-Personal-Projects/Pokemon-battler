import { FormattedMoves, RawMoves } from "../db/data/tsPokemonTypes";

export const formatMoveTypes = (moves: RawMoves) => {
  return Object.values(moves).map((move) => ({
    move: move.name,
    type: move.type,
  }));
};
