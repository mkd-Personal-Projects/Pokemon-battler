import { trpc } from "../../utils/trpc";

export const useGetTrainers = () => {
  const { data: trainers } = trpc.trainer.list.useQuery();

  return {
    trainers,
  };
};
