import { getAllTypes } from "../../models/data/types.model";
import { procedure, router } from "../trpc";
import { z } from "zod";

export const type = router({
  list: procedure.query(async () => {
    const types = await getAllTypes();

    return types;
  }),
});
