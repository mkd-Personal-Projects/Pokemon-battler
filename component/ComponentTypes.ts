import { ReactNode } from "react";
import { PokemonWithTypes } from "../db/data/tsPokemonTypes";

export type BattlePokemonTypes = {
  src: string;
  position: string;
};

export type PlayerPopupType = { options: string[]; isMoveSelect: boolean };

export type ChildrenType = { children: ReactNode };

export type PokemonCardType = {
  pokemon: PokemonWithTypes;
  handleSelectedPokemon: () => void;
  isSelected: boolean;
};
