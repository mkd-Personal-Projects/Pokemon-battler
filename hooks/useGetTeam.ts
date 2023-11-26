import { FormattedMoves, PokemonWithTypes } from "../db/data/tsPokemonTypes";
import { useState } from "react";

type SelectedPokemonType = PokemonWithTypes & { moves: FormattedMoves[] };

export const useGetTeam = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<SelectedPokemonType[]>(
    []
  );

  const handleAddSelectedPokemon = (pokemon: SelectedPokemonType) => {
    setSelectedPokemon((currVal) => {
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
    selectedPokemon,
    handleSelectedPokemon: handleAddSelectedPokemon,
  };
};
