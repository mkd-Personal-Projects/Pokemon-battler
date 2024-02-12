import { getAllMoves, getMovesByType } from "../../models/data/moves.model";
import { procedure, router } from "../trpc";
import { z } from "zod";

export const move = router({
  list: procedure.query(async () => {
    const moves = await getAllMoves();

    return moves;
  }),

  getByType: procedure.input(z.string()).query(async ({ input }) => {
    const moveType = input;

    const moves = await getMovesByType(moveType);

    return moves;
  }),
});
