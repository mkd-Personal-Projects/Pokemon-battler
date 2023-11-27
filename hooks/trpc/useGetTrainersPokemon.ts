import { trpc } from "../../utils/trpc";

export const useGetTrainersPokemon = () => {
  const { data: cynthiasTeam } = trpc.trainer.getPokemon.useQuery({
    trainerName: "Cynthia",
  });

  return {
    cynthiasTeam,
  };
};
