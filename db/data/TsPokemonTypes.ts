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
  health: number;
  speed: number;
  attack: number;
  defense: number;
  splAttack: number;
  splDefense: number;
  level: number;
};

export type RawMoves = {
  moveName: string;
  type: string;
  category: string;
  power: number;
  accuracy: number;
  pp: number;
};

export type formattedMoves = {
  moveName: string;
  category: string;
  power: number;
  accuracy: number;
  pp: number;
};
