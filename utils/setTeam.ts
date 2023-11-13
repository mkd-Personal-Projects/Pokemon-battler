import client from "../db/client";
import { MoveTypes, formattedPokemon } from "../db/data/tsPokemonTypes";

export const setTeam = async (
  team: formattedPokemon[],
  pokemonMoves: { name: string; moves: string[] }[]
) => {
  const getMove = async (moveName: string) => {
    const move = await client.moveTypes.findMany({
      where: { Moves: { moveName: moveName } },
      include: { Moves: true },
    });

    return move;
  };

  const formattedPokemonMoves: { [key: string]: MoveTypes[] } = {};

  for (let i = 0; i < pokemonMoves.length; i++) {
    const move = pokemonMoves[i];

    formattedPokemonMoves[move.name] = [
      ...(await Promise.all(
        move.moves.map(async (eachMove) => {
          return (await getMove(eachMove))[0];
        })
      )),
    ];
  }

  const selectedPokemonMoves: { pokemonId: number; move: string }[] = [];

  team.forEach(async (pokemon) => {
    const selectedMoves = formattedPokemonMoves[pokemon.pokemonName];

    selectedMoves.forEach(async (move) => {
      selectedPokemonMoves.push({
        pokemonId: pokemon.pokemonId,
        move: move.move,
      });
    });
  });

  await client.pokemonMoves.createMany({
    data: selectedPokemonMoves,
  });
};
