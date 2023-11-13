import client from "./client";
import { types } from "./data/types";
import { formatPokemon } from "../utils/formatPokemon";
import { rawPokemon } from "./data/rawPokemon";
import { formatMoves } from "../utils/formatMoves";
import { formatPokemonTypes } from "../utils/formatPokemonTypes";
import { formatMoveTypes } from "../utils/formatMoveTypes";
import { trainers } from "./data/trainers";
import { rawMoves } from "./data/rawMoves";
import { getCynthiasTeam } from "./data/trainerPokemon";
import { calculateStats } from "../utils/statCalc";
import { setTeam } from "../utils/setTeam";
import { cynthiasPokemonMoves } from "./data/pokemonMoves";

const seed = async () => {
  await client.pokemonMoves.deleteMany();
  await client.pokemonTypes.deleteMany();
  await client.moveTypes.deleteMany();

  await client.types.deleteMany();
  await client.pokemon.deleteMany();
  await client.moves.deleteMany();
  await client.trainers.deleteMany();

  await client.types.createMany({ data: types });

  const formattedMoves = formatMoves(rawMoves);
  await client.moves.createMany({ data: formattedMoves });

  const formattedMoveTypes = formatMoveTypes(rawMoves);
  await client.moveTypes.createMany({ data: formattedMoveTypes });

  const formattedPokemon = formatPokemon(rawPokemon);
  await client.pokemon.createMany({
    data: formattedPokemon.map((pokemon) => {
      return { ...pokemon, ...calculateStats({ ...pokemon, level: 50 }) };
    }),
  });

  const formattedPokemonTypes = formatPokemonTypes(rawPokemon);
  await client.pokemonTypes.createMany({ data: formattedPokemonTypes });

  await client.trainers.createMany({ data: trainers });

  await setTeam(await getCynthiasTeam(), cynthiasPokemonMoves);

  console.log("all seeded a ok");
};

seed();
