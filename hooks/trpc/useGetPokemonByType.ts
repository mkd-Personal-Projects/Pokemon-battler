import { useEffect } from "react";
import { trpc } from "../../utils/trpc";
import { PokemonWithMovesTypes } from "../../db/data/tsPokemonTypes";

export const useGetPokemonByType = (
  type: string,
  handleAddToPokemonTeam: (pokemon: PokemonWithMovesTypes) => void,
  pokemonTeam: PokemonWithMovesTypes[]
) => {
  const { data: pokemonByType } = trpc.pokemon.getByType.useQuery(type, {
    enabled: type ? true : false,
  });

  useEffect(() => {
    const isNewPokemon = pokemonTeam.every(
      (mon) => mon.pokemonName !== pokemonByType?.pokemonName
    );

    if (isNewPokemon && pokemonByType) {
      handleAddToPokemonTeam({ ...pokemonByType, status: "" });
    }
  }, [pokemonByType]);

  return {
    pokemonByType,
  };
};
