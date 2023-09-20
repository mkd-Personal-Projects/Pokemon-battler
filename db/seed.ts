import client from "./client";
import { pokemon } from "./data/pokemon";
import { moves } from "./data/moves";
import { pokemonMoves } from "./data/pokemonMoves";
import { types } from "./data/types";

const seed = async () => {
  await client.pokemonMoves.deleteMany();
  await client.pokemonTypes.deleteMany();
  await client.types.deleteMany();
  await client.pokemon.deleteMany();
  await client.moves.deleteMany();

  await client.moves.createMany({ data: moves });
  await client.pokemon.createMany({ data: pokemon });
  await client.types.createMany({ data: types });
  // await client.pokemonMoves.createMany({ data: pokemonMoves });
  // await client.pokemonTypes.createMany({ data: pokemonTypes });

  console.log("all seeded a ok");
};

seed();
