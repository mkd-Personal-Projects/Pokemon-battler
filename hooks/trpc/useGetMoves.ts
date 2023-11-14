import { trpc } from "../../utils/trpc";

export const useGetMoves = () => {
  const { data: moves } = trpc.getAllMoves.useQuery();

  return {
    moves,
  };
};
