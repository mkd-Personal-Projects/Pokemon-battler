import { PokemonWithMovesTypes } from "../db/data/tsPokemonTypes";
import { useState } from "react";

export const useGetTeam = () => {
  const [pokemonTeam, setPokemonTeam] = useState<PokemonWithMovesTypes[]>([]);

  const handleAddToPokemonTeam = (pokemon: PokemonWithMovesTypes) => {
    setPokemonTeam((currVal) => {
      if (currVal.some((mon) => pokemon.pokemonId === mon.pokemonId)) {
        return currVal.filter((mon) => {
          return mon.pokemonId !== pokemon.pokemonId;
        });
      }

      if (currVal.length < 6) {
        return [...currVal, pokemon];
      }
      return currVal;
    });
  };

  return {
    pokemonTeam,
    setPokemonTeam,
    handleAddToPokemonTeam: handleAddToPokemonTeam,
  };
};
