import { RawMoves } from "../db/data/TsPokemonTypes";

export const formatMoves = (rawPokemon: RawMoves[]) => {
  return rawPokemon.map((pokemon) => {
    return {
      moveName: pokemon.moveName[0].toUpperCase() + pokemon.moveName.slice(1),
      category: pokemon.category[0].toUpperCase() + pokemon.category.slice(1),
      power: pokemon.power,
      accuracy: pokemon.accuracy,
      pp: pokemon.pp,
    };
  });
};
