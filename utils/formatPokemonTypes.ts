import { RawPokemon } from "../db/data/TsPokemonTypes";

export const formatPokemonTypes = (pokemons: RawPokemon[]) => {
  return pokemons.reduce(
    (
      accumulator: { pokemonId: number; type: string }[],
      pokemon: RawPokemon
    ) => {
      return [
        ...accumulator,
        ...pokemon.type.map((type) => {
          return { pokemonId: pokemon.id, type: type };
        }),
      ];
    },
    []
  );
};
