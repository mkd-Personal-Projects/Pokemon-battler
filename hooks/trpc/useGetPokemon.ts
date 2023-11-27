import { trpc } from "../../utils/trpc";

export const useGetPokemon = () => {
  const { data: pokemon } = trpc.pokemon.list.useQuery();

  return {
    pokemon,
  };
};
