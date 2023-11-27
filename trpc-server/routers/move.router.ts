import { getAllMoves } from "../../models/data/moves.model";
import { procedure, router } from "../trpc";
import { z } from "zod";

export const move = router({
  list: procedure.query(async () => {
    const moves = await getAllMoves();

    return moves;
  }),
});
