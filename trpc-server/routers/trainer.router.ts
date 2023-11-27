import {
  getAllTrainers,
  getTrainersPokemon,
} from "../../models/data/trainers.model";
import { procedure, router } from "../trpc";
import { z } from "zod";

export const trainer = router({
  list: procedure.query(async () => {
    const types = await getAllTrainers();

    return types;
  }),
  getPokemon: procedure
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
