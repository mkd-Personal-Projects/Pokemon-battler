import client from "../../db/client";

export const getAllMoves = async () => {
  const moves = await client.moves.findMany();
  return moves;
};
