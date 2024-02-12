import { MoveTypes, MoveTypesFormatted } from "../../db/data/tsPokemonTypes";
import { getMovesByType } from "../../models/data/moves.model";
import {
  getAllPokemon,
  getPokemonById,
  getPokemonByType,
  getPokemonsBySearchedName,
  getRandomPokemon,
} from "../../models/data/pokemon.model";
import { getFourRandomElems } from "../../utils/getFourRandomElems";
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

    const pokemon = await getPokemonsBySearchedName(pokemonName);

    const pokemonWithMoves = await Promise.all(
      pokemon.map(async (mon) => {
        const moves = getFourRandomElems(
          [
            ...(await Promise.all(
              mon.type.map(async (type) => {
                return await Promise.all([...(await getMovesByType(type))]);
              })
            )),
          ].flat()
        ) as MoveTypes[];

        const formattedMoves = moves.map((move) => {
          return { ...move.Moves, type: move.type };
        }) as MoveTypesFormatted[];

        return {
          ...mon,
          moves: formattedMoves,
          currentHealth: mon.health,
        };
      })
    );

    return pokemonWithMoves;
  }),
  getByType: procedure.input(z.string()).query(async ({ input }) => {
    const type = input;

    const pokemon = await getPokemonByType(type);
    const moves = await getMovesByType(type);

    const formattedMoves = moves.map((move) => {
      return { ...move.Moves, type: move.type };
    });

    return { ...pokemon, moves: formattedMoves, currentHealth: pokemon.health };
  }),
  getRandomPokemon: procedure.input(z.string()).query(async () => {
    const pokemon = await getRandomPokemon();

    const moves = getFourRandomElems(
      [
        ...(await Promise.all(
          pokemon.type.map(async (type) => {
            return await Promise.all([...(await getMovesByType(type))]);
          })
        )),
      ].flat()
    ) as MoveTypes[];

    const formattedMoves = moves.map((move) => {
      return { ...move.Moves, type: move.type };
    }) as MoveTypesFormatted[];

    return {
      ...pokemon,
      moves: formattedMoves,
      currentHealth: pokemon.health,
    };
  }),
});
