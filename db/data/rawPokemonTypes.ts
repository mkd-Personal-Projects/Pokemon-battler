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
  type: string;
  health: number;
  speed: number;
  attack: number;
  defense: number;
  splAttack: number;
  splDefense: number;
  level: number;
};
