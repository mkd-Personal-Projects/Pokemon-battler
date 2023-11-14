import { trpc } from "../../utils/trpc";

export const useGetTrainersPokemon = () => {
  const { data: cynthiasTeam } = trpc.getTrainersPokemon.useQuery({
    trainerName: "Cynthia",
  });

  return {
    cynthiasTeam,
  };
};
