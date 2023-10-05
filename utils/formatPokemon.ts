import { RawPokemon } from "../db/data/TsPokemonTypes";

export const formatPokemon = (rawPokemon: RawPokemon[]) => {
  return rawPokemon.map((pokemon) => {
    return {
      pokemonId: pokemon.id,
      pokemonName: pokemon.name.english,
      health: pokemon.base.HP,
      attack: pokemon.base.Attack,
      defense: pokemon.base.Defense,
      splAttack: pokemon.base["Sp. Attack"],
      splDefense: pokemon.base["Sp. Defense"],
      speed: pokemon.base.Speed,
      level: 1,
    };
  });
};
