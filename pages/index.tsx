import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const pokemon = trpc.getAllPokemon.useQuery({
    sortBy: "pokemonId",
    orderBy: "asc",
  });

  const cynthiasTeam = trpc.getTrainersPokemon.useQuery({
    trainerName: "Cynthia",
  });

  if (!pokemon.data && !cynthiasTeam.data) {
    return <div>Loading...</div>;
  }

  console.log(pokemon.data);
  console.log(cynthiasTeam.data);

  return <div>{/* <p>{hello.data.greeting}</p> */}</div>;
}
