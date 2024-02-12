import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import { PokemonWithMovesTypes } from "../../db/data/tsPokemonTypes";

export const useGetPokemonByName = (searchTerm: string) => {
  const [pokemon, setPokemon] = useState<PokemonWithMovesTypes[]>([]);
  const { data, isLoading } = trpc.pokemon.getByName.useQuery(searchTerm);

  useEffect(() => {
    if (data && !isLoading) {
      setPokemon(data.map((mon) => ({ ...mon, status: "" })));
    }
  }, [data]);

  return {
    searchedPokemon: pokemon,
    isLoading,
  };
};
