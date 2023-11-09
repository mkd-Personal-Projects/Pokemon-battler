import { RawMoves, FormattedMoves } from "../db/data/tsPokemonTypes";

export const formatMoves = (rawMoves: RawMoves) => {
  return Object.values(rawMoves).reduce(
    (accumulator: FormattedMoves[], move) => {
      if (move.basePower) {
        let accuracy = 0;

        if (typeof move.accuracy !== "boolean") {
          accuracy = move.accuracy;
        } else if (move.accuracy) {
          accuracy = 100;
        }

        return [
          ...accumulator,
          {
            moveName: move.name,
            category: move.category,
            power: move.basePower,
            accuracy,
            pp: move.pp,
          },
        ];
      } else {
        return accumulator;
      }
    },
    []
  );
};
