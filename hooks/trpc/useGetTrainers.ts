import { trpc } from "../../utils/trpc";

export const useGetTrainers = () => {
  const { data: trainers } = trpc.getAllTrainers.useQuery();

  return {
    trainers,
  };
};
