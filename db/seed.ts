import client from "./client";
import { moves } from "./data/moves";
import { types } from "./data/types";
import { formatPokemon } from "../utils/formatPokemon";
import { rawPokemon } from "./data/rawPokemon";
// import { pokemonMoves } from "./data/pokemonMoves";
import { formatMoves } from "../utils/formatMoves";
import { formatPokemonTypes } from "../utils/formatPokemonTypes";
import { formatMoveTypes } from "../utils/formatMoveTypes";
import { trainers } from "./data/trainers";
import fs from "fs";
import { rawMoves } from "./data/rawMoves";
import { getCynthiasTeam, setCynthiasTeam } from "./data/trainerPokemon";
import { calculateStats } from "../utils/statCalc";
import { setTeam } from "../utils/setTeam";
// import { getCynthiasTeam } from "./data/trainerPokemon";

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
  // await setCynthiasTeam();

  setTeam(await getCynthiasTeam(), [
    { name: "Spiritomb", moves: ["Dark Pulse"] },
  ]);

  console.log("all seeded a ok");
};

seed();
