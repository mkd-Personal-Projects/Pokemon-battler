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
import { setCynthiasTeam } from "./data/trainerPokemon";
import { calculateStats } from "../utils/statCalc";
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
  await setCynthiasTeam();
  // await client.pokemonMoves.createMany({ data: pokemonMoves });

  // await client.belt.createMany({data: })

  // console.log(
  //   await client.pokemonTypes.findMany({
  //     where: { pokemonId: 70 },
  //     include: { Types: true },
  //   }),
  // await client.moveTypes.findMany({
  //   where: { type: "Grass" },
  //   include: { Moves: true, Types: true },
  // })
  // await client.trainers.findMany()
  // );

  // rawPokemon id and moves names to create pokemon moves

  // fs.writeFile()

  // const cynthiasTeam = getCynthiasTeam()

  // console.log(
  //   await client.moveTypes.findMany({
  //     where: { type: "Dragon" },
  //     include: { Moves: true },
  //   })
  // );

  console.log(
    (await client.pokemonMoves.findMany({ include: { Pokemon: true } })).length
  );

  console.log("all seeded a ok");
};

seed();
