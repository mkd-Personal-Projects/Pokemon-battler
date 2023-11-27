import { trpc } from "../../utils/trpc";

export const useGetMoves = () => {
  const { data: moves } = trpc.move.list.useQuery();

  return {
    moves,
  };
};
