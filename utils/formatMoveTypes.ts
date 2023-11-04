import { RawMoves } from "../db/data/tsPokemonTypes";

export const formatMoveTypes = (moves: RawMoves[]) => {
  return moves.map((move) => ({
    move: move.moveName[0].toUpperCase() + move.moveName.slice(1),
    type: move.type[0].toUpperCase() + move.type.slice(1),
  }));
};
