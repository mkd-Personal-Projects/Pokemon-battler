import {
  getAllPokemon,
  getPokemonById,
  getPokemonByName,
  getPokemonBySearch,
} from "../../models/data/pokemon.model";
import { procedure, router } from "../trpc";
import { z } from "zod";

export const pokemon = router({
  list: procedure
    .input(
      z
        .object({
          sortBy: z.enum([
            "attack",
            "defense",
            "speed",
            "health",
            "splAttack",
            "splDefense",
            "pokemonId",
            "pokemonName",
          ]),
          orderBy: z.enum(["asc", "desc"]),
        })
        .optional()
    )
    .query(async ({ input }) => {
      let queryOptions: {
        [key: string]: "asc" | "desc";
      } = {};

      if (input) {
        const { orderBy, sortBy } = input;

        queryOptions[sortBy] = orderBy;
      } else {
        queryOptions.pokemonId = "asc";
      }

      const pokemon = await getAllPokemon(queryOptions);

      return pokemon;
    }),
  getById: procedure.input(z.number()).query(async ({ input }) => {
    const pokemonId = input;
    const pokemon = await getPokemonById(pokemonId);

    return pokemon;
  }),
  getByName: procedure.input(z.string()).query(async ({ input }) => {
    const pokemonName = input;

    const pokemon = await getPokemonBySearch(pokemonName);

    return pokemon;
  }),
});
