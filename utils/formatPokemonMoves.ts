import { RawMoves, RawPokemon } from "../db/data/TsPokemonTypes";

export const formatPokemonMoves = (
  rawPokemon: RawPokemon[],
  rawMoves: RawMoves[]
) => {
  function combinePokemonWithMoves(pokemon: RawPokemon) {
    return rawMoves.reduce(
      (accumulator: { pokemonId: number; move: string }[], move) => {
        const moveType = move.type[0].toUpperCase() + move.type.slice(1);
        const moveName =
          move.moveName[0].toUpperCase() + move.moveName.slice(1);

        if (pokemon.type.includes(moveType)) {
          return [...accumulator, { pokemonId: pokemon.id, move: moveName }];
        } else {
          return accumulator;
        }
      },
      []
    );
  }

  const pokemonMoves = rawPokemon.reduce(
    (
      accumulator: { pokemonId: number; move: string }[],
      pokemon: RawPokemon
    ) => {
      return [...accumulator, ...combinePokemonWithMoves(pokemon)];
    },
    []
  );

  return pokemonMoves;
};
