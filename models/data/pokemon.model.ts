import client from "../../db/client";

export const getAllPokemon = async () => {
  const pokemon = await client.pokemon.findMany();

  return pokemon;
};

export const getPokemonById = async (pokemonId: number) => {
  const pokemon = await client.pokemon.findMany({
    where: { pokemonId: pokemonId },
  });

  return pokemon[0];
};
