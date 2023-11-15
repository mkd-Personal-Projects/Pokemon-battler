import { FormattedMoves, PokemonWithTypes } from "../../db/data/tsPokemonTypes";
import { useState } from "react";

export const useGetTeam = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<
    (PokemonWithTypes & { moves: FormattedMoves[] })[]
  >([]);

  const handleAddSelectedPokemon = (
    pokemon: PokemonWithTypes & { moves: FormattedMoves[] }
  ) => {
    setSelectedPokemon((currVal) => {
      if (currVal.length < 6) {
        return [...currVal, pokemon];
      }
      return currVal;
    });
  };

  return {
    selectedPokemon,
    addSelectedPokemon: handleAddSelectedPokemon,
  };
};
