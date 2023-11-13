import client from "../../db/client";
import { getTrainersTeam } from "../../db/data/trainerPokemon";

export const getAllTrainers = async () => {
  const trainers = await client.trainers.findMany();

  return trainers;
};

export const getTrainersPokemon = async (name: string) => {
  const trainersTeam = await getTrainersTeam(name);

  return trainersTeam;
};
