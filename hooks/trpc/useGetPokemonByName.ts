import { useState } from "react";
import { trpc } from "../../utils/trpc";

export const useGetPokemonByName = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const { data, refetch } = trpc.pokemon.getByName.useQuery(pokemonName);

  const updateSearch = (str: string) => {
    setPokemonName(str);
  };

  return {
    searchedPokemon: data,
    setPokemonName: updateSearch,
  };
};
