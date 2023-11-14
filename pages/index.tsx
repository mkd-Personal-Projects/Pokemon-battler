import { useGetPokemon } from "../hooks/trpc/useGetPokemon";

export default function IndexPage() {
  const { pokemon } = useGetPokemon();

  if (!pokemon) {
    return <div>Loading...</div>;
  }

  console.log(pokemon);

  return <div>{/* <p>{hello.data.greeting}</p> */}</div>;
}
