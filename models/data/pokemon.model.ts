import client from "../../db/client";
import { PokemonWithTypes } from "../../db/data/tsPokemonTypes";

export const getAllPokemon = async (orderByOptions: {
  [key: string]: "asc" | "desc";
}) => {
  const pokemon = await client.pokemonTypes.findMany({
    include: { Pokemon: true },
    orderBy: { Pokemon: orderByOptions },
  });

  const pokemonLibrary: number[] = [];

  return pokemon.reduce((accumulator: PokemonWithTypes[], singlePokemon) => {
    if (singlePokemon.pokemonId === pokemonLibrary[pokemonLibrary.length - 1]) {
      accumulator[accumulator.length - 1].type.push(singlePokemon.type);
      return accumulator;
    } else {
      pokemonLibrary.push(singlePokemon.pokemonId);
      return [
        ...accumulator,
        {
          pokemonId: singlePokemon.pokemonId,
          type: [singlePokemon.type],
          pokemonName: singlePokemon.Pokemon.pokemonName,
          attack: singlePokemon.Pokemon.attack,
          defense: singlePokemon.Pokemon.defense,
          health: singlePokemon.Pokemon.health,
          splAttack: singlePokemon.Pokemon.splAttack,
          splDefense: singlePokemon.Pokemon.splDefense,
          speed: singlePokemon.Pokemon.speed,
          level: singlePokemon.Pokemon.level,
        },
      ];
    }
  }, []);
};

export const getPokemonById = async (pokemonId: number) => {
  const pokemon = await client.pokemonTypes.findMany({
    include: { Pokemon: true },
    where: { pokemonId: pokemonId },
  });

  return {
    pokemonId: pokemon[0].pokemonId,
    pokemonName: pokemon[0].Pokemon.pokemonName,
    type: [
      ...pokemon.map((mon) => {
        return mon.type;
      }),
    ],
    attack: pokemon[0].Pokemon.attack,
    defense: pokemon[0].Pokemon.defense,
    health: pokemon[0].Pokemon.health,
    splAttack: pokemon[0].Pokemon.splAttack,
    splDefense: pokemon[0].Pokemon.splDefense,
    speed: pokemon[0].Pokemon.speed,
    level: pokemon[0].Pokemon.level,
  };
};
