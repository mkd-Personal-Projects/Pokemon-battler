import { ReactNode } from "react";
import {
  PokemonWithMovesTypes,
  PokemonWithTypes,
} from "../db/data/tsPokemonTypes";

export type BattlePokemonTypes = {
  position: string;
  pokemon: PokemonWithMovesTypes;
  shouldDisplayTemp: boolean;
};

export type PlayerPopupType = {
  options: string[];
  isMoveSelect: boolean;
  handleClick: (selectedOption: string) => void;
  fontSize: string;
  isDisabled: boolean;
};

export type ChildrenType = { children: ReactNode };

export type PokemonCardType = {
  pokemon: PokemonWithTypes;
  handleSelectedPokemon: () => void;
  isSelected: boolean;
  shouldDisplayTemp: boolean;
};

export type PokemonPokeballIconType = {
  pokemonId: number;
  shouldDisplayTemp: boolean;
  status: string;
  handleClick: (pokemonId: number) => void;
};
