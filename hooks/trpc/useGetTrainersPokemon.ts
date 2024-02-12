import { useEffect, useState } from "react";
import { trpc } from "../../utils/trpc";
import { PokemonWithMovesTypes } from "../../db/data/tsPokemonTypes";

export const useGetTrainersPokemon = () => {
  const [opponentTeam, setOpponentTeam] = useState<PokemonWithMovesTypes[]>([]);

  const { data, isLoading } = trpc.trainer.getPokemon.useQuery({
    trainerName: "Cynthia",
  });

  useEffect(() => {
    if (!isLoading && data) {
      setOpponentTeam(data);
    }
  }, [isLoading]);

  return {
    opponentTeam,
    setOpponentTeam,
  };
};
