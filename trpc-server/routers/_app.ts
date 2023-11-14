import { z } from "zod";
import { procedure, router } from "../trpc";
import { getAllPokemon, getPokemonById } from "../../models/data/pokemon.model";
import { getAllMoves } from "../../models/data/moves.model";
import { getAllTypes } from "../../models/data/types.model";
import {
  getAllTrainers,
  getTrainersPokemon,
} from "../../models/data/trainers.model";

export const appRouter = router({
  getAllPokemon: procedure
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
  getPokemonById: procedure
    .input(
      z.object({
        pokemonId: z.number(),
      })
    )
    .query(async ({ input }) => {
      const pokemon = await getPokemonById(input.pokemonId);

      return pokemon;
    }),
  getAllMoves: procedure.query(async () => {
    const moves = await getAllMoves();

    return moves;
  }),
  getAllTypes: procedure.query(async () => {
    const types = await getAllTypes();

    return types;
  }),
  getAllTrainers: procedure.query(async () => {
    const types = await getAllTrainers();

    return types;
  }),
  getTrainersPokemon: procedure
    .input(
      z.object({
        trainerName: z.string(),
      })
    )
    .query(async ({ input }) => {
      const pokemon = await getTrainersPokemon(input.trainerName);

      return pokemon;
    }),
});
