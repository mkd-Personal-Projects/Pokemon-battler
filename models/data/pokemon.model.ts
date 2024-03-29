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

  const formattedPokemon: PokemonWithTypes = {
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

  return formattedPokemon;
};

export const getPokemonByName = async (pokemonName: string) => {
  const pokemon = await client.pokemonTypes.findMany({
    include: { Pokemon: true },
    where: { Pokemon: { pokemonName: { search: pokemonName } } },
    take: 2,
  });

  const formattedPokemon: PokemonWithTypes = {
    pokemonId: pokemon[0].pokemonId,
    pokemonName: pokemon[0].Pokemon.pokemonName,
    type: [
      ...pokemon.reduce((accumulator: string[], mon) => {
        if (mon.pokemonId === pokemon[0].pokemonId) {
          return [...accumulator, mon.type];
        } else {
          return accumulator;
        }
      }, []),
    ],
    attack: pokemon[0].Pokemon.attack,
    defense: pokemon[0].Pokemon.defense,
    health: pokemon[0].Pokemon.health,
    splAttack: pokemon[0].Pokemon.splAttack,
    splDefense: pokemon[0].Pokemon.splDefense,
    speed: pokemon[0].Pokemon.speed,
    level: pokemon[0].Pokemon.level,
  };

  return formattedPokemon;
};

export const getPokemonsBySearchedName = async (pokemonName: string) => {
  const pokemon = await client.pokemon.groupBy({
    by: ["pokemonName"],
    take: 3,
    orderBy: {
      pokemonName: "asc",
    },
    where: {
      pokemonName: { startsWith: pokemonName, mode: "insensitive" },
    },
  });

  if (pokemon.length === 0) {
    return [];
  }

  return await Promise.all(
    pokemon.map(async (mon) => {
      return await getPokemonByName(mon.pokemonName);
    })
  );
};

export const getPokemonByType = async (pokemonType: string) => {
  const pokemon = await client.pokemonTypes.findMany({
    include: { Pokemon: true },
    where: { Types: { type: { search: pokemonType } } },
  });

  const ChosenPokemon =
    pokemon[Math.floor(Math.random() * (pokemon.length - 1))];

  return await getPokemonByName(ChosenPokemon.Pokemon.pokemonName);
};

export const getRandomPokemon = async () => {
  const pokemon = await client.pokemonTypes.findMany({
    include: { Pokemon: true },
  });

  const ChosenPokemon =
    pokemon[Math.floor(Math.random() * (pokemon.length - 1))];

  return await getPokemonByName(ChosenPokemon.Pokemon.pokemonName);
};
