import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import { PokemonWithMovesTypes } from "../../db/data/tsPokemonTypes";

export const useGetRandomPokemon = (
  shouldGetRandomPokemon: boolean,
  handleAddToPokemonTeam: (pokemon: PokemonWithMovesTypes) => void,
  pokemonTeam: PokemonWithMovesTypes[],
  setShouldGetRandomPokemon: (boolean: boolean) => void
) => {
  const { data } = trpc.pokemon.getRandomPokemon.useQuery("", {
    enabled: shouldGetRandomPokemon,
  });

  useEffect(() => {
    const isNewPokemon = pokemonTeam.every(
      (mon) => mon.pokemonName !== data?.pokemonName
    );

    if (isNewPokemon && data) {
      handleAddToPokemonTeam({ ...data, status: "" });
      setShouldGetRandomPokemon(false);
    }
  }, [data]);
};
