import { RawPokemon, formattedPokemon } from "../db/data/rawPokemonTypes";

export const formatPokemon = (rawPokemon: RawPokemon[]) => {
  return rawPokemon.reduce((accumulator: formattedPokemon[], pokemon) => {
    if (pokemon.type.length > 1) {
      return accumulator;
    }

    return [
      ...accumulator,
      {
        pokemonId: pokemon.id,
        pokemonName: pokemon.name.english,
        type: pokemon.type[0],
        health: pokemon.base.HP,
        attack: pokemon.base.Attack,
        defense: pokemon.base.Defense,
        splAttack: pokemon.base["Sp. Attack"],
        splDefense: pokemon.base["Sp. Defense"],
        speed: pokemon.base.Speed,
        level: 1,
      },
    ];
  }, []);
};
