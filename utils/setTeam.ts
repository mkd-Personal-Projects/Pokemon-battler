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

  const test: { [key: string]: MoveTypes[] } = {};

  for (let i = 0; i < pokemonMoves.length; i++) {
    const move = pokemonMoves[i];

    test[move.name] = [
      ...(await Promise.all(
        move.moves.map(async (eachMove) => {
          return (await getMove(eachMove))[0];
        })
      )),
    ];
  }

  console.log(test);

  const formattedPokemonMoves: { [key: string]: MoveTypes[] } = {
    Spiritomb: [
      ...(await getMove("Dark Pulse")),
      ...(await getMove("Psychic")),
      ...(await getMove("Silver Wind")),
      ...(await getMove("Astonish")),
    ],
    Lucario: [
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Aura Sphere" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Dragon Pulse" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Psychic" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Earthquake" } },
        include: { Moves: true },
      })),
    ],
    Roserade: [
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Energy Ball" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Shadow Ball" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Sludge Bomb" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Extrasensory" } },
        include: { Moves: true },
      })),
    ],
    Milotic: [
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Surf" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Ice Beam" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Aurora Beam" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Bite" } },
        include: { Moves: true },
      })),
    ],
    Togekiss: [
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Muddy Water" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Earthquake" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Stone Edge" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Sludge Bomb" } },
        include: { Moves: true },
      })),
    ],
    Garchomp: [
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Dragon Rush" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Earthquake" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Brick Break" } },
        include: { Moves: true },
      })),
      ...(await client.moveTypes.findMany({
        where: { Moves: { moveName: "Giga Impact" } },
        include: { Moves: true },
      })),
    ],
  };

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
