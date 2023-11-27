import { router } from "../trpc";
import { pokemon } from "./pokemon.router";
import { type } from "./type.router";
import { trainer } from "./trainer.router";
import { move } from "./move.router";

export const appRouter = router({
  pokemon: pokemon,
  type: type,
  trainer: trainer,
  move: move,
});
