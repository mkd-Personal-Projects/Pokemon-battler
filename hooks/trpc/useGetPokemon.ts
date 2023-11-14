import { trpc } from "../../utils/trpc";

export const useGetPokemon = () => {
  const { data: pokemon } = trpc.getAllPokemon.useQuery();

  return {
    pokemon,
  };
};
