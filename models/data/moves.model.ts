import client from "../../db/client";
import { getFourRandomElems } from "../../utils/getFourRandomElems";

export const getAllMoves = async () => {
  const moves = await client.moves.findMany();
  return moves;
};

export const getMovesByType = async (pokemonType: string) => {
  const moves = await client.moveTypes.findMany({
    include: { Moves: true },
    where: { Types: { type: { search: pokemonType } } },
  });

  const fourRandomMoves = getFourRandomElems(moves);

  return fourRandomMoves;
};
