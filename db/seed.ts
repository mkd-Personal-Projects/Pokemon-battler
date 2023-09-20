import client from "./client";
import { moves } from "./data/moves";
import { types } from "./data/types";
import { formatPokemon } from "../utils/formatPokemon";
import { rawPokemon } from "./data/rawPokemon";
import { pokemonMoves } from "./data/pokemonMoves";

const seed = async () => {
  await client.pokemonMoves.deleteMany();
  await client.pokemonTypes.deleteMany();
  await client.types.deleteMany();
  await client.pokemon.deleteMany();
  await client.moves.deleteMany();

  await client.moves.createMany({ data: moves });
  await client.types.createMany({ data: types });

  const formattedPokemon = formatPokemon(rawPokemon);
  await client.pokemon.createMany({ data: formattedPokemon });

  // await client.pokemonMoves.createMany({ data: pokemonMoves });
  // await client.pokemonTypes.createMany({ data: pokemonTypes });

  console.log("all seeded a ok");
};

seed();
