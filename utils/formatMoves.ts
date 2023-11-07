import { RawMoves, formattedMoves } from "../db/data/tsPokemonTypes";

export const formatMoves = (rawMoves: RawMoves) => {
  return Object.values(rawMoves).reduce(
    (accumulator: formattedMoves[], move) => {
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

  // return rawPokemon.map((pokemon) => {
  //   return {
  //     moveName: pokemon.moveName[0].toUpperCase() + pokemon.moveName.slice(1),
  //     category: pokemon.category[0].toUpperCase() + pokemon.category.slice(1),
  //     power: pokemon.power,
  //     accuracy: pokemon.accuracy,
  //     pp: pokemon.pp,
  //   };
  // });
};
