export type RawPokemon = {
  id: number;
  name: {
    english: string;
    japanese: string;
    chinese: string;
    french: string;
  };
  type: string[];
  base: {
    HP: number;
    Attack: number;
    Defense: number;
    "Sp. Attack": number;
    "Sp. Defense": number;
    Speed: number;
  };
};

export type formattedPokemon = {
  pokemonId: number;
  pokemonName: string;
} & pokemonStats;

export type pokemonStats = {
  health: number;
  speed: number;
  attack: number;
  defense: number;
  splAttack: number;
  splDefense: number;
  level: number;
};

export type RawMoves = {
  [key: string]: {
    num: number;
    accuracy: number | boolean;
    basePower: number;
    category: string;
    name: string;
    pp: number;
    priority: number;
    flags: { [key: string]: string | number };
    target: string;
    type: string;
  };
};

export type FormattedMoves = {
  moveName: string;
  category: string;
  power: number;
  accuracy: number;
  pp: number;
};

export type TypeInfo = {
  strongAgainst: string[];
  weakAgainst: string[];
  doesNotEffect: string[];
};

export type MoveTypes = {
  moveTypeId: string;
  move: string;
  type: string;
  Moves?: FormattedMoves;
  Types?: TypeInfo;
};

export type MoveTypesFormatted = {
  moveName: string;
  category: string;
  power: number;
  accuracy: number;
  pp: number;
  type: string;
};

export type PokemonWithTypes = {
  type: string[];
} & formattedPokemon;

export type PokemonWithMovesTypes = {
  moves: MoveTypesFormatted[];
  status: string;
  currentHealth?: number;
} & PokemonWithTypes;
