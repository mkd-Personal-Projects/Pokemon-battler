import { useGetMoves } from "../hooks/trpc/useGetMoves";
import { useGetPokemon } from "../hooks/trpc/useGetPokemon";
import { useGetTrainersPokemon } from "../hooks/trpc/useGetTrainersPokemon";
import { trpc } from "../utils/trpc";

export default function IndexPage() {
  const { pokemon } = useGetPokemon();

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  console.log(pokemon);

  return <div>{/* <p>{hello.data.greeting}</p> */}</div>;
}
