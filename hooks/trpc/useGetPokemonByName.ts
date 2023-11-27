import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";

export const useGetPokemonByName = () => {
  const [pokemonName, setPokemonName] = useState<string>("");
  const { data, refetch } = trpc.pokemon.getByName.useQuery(pokemonName);

  useEffect(() => {
    refetch();
  }, [pokemonName]);

  const updateSearch = (str: string) => {
    setPokemonName(str);
  };

  return {
    pokemon: data,
    pokemonName,
    setPokemonName: updateSearch,
    refetch,
  };
};
