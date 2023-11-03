import { formatPokemonTypes } from "../../utils/formatPokemonTypes";

describe("formatPokemonTypes", () => {
  it("should return an empty array when given two empty arrays", () => {
    expect(formatPokemonTypes([])).toEqual([]);
  });

  it("should return an array with the pokemon id and type", () => {
    const input = [
      {
        id: 2,
        name: {
          english: "Ivysaur",
          japanese: "フシギソウ",
          chinese: "妙蛙草",
          french: "Herbizarre",
        },
        type: ["Grass"],
        base: {
          HP: 60,
          Attack: 62,
          Defense: 63,
          "Sp. Attack": 80,
          "Sp. Defense": 80,
          Speed: 60,
        },
      },
    ];

    const output = formatPokemonTypes(input);
    const expectedOutput = [
      {
        pokemonId: 2,
        type: "Grass",
      },
    ];

    expect(output).toEqual(expectedOutput);
  });

  it("should return an array with pokemon id and type and add a new obj for each type ", () => {
    const input = [
      {
        id: 2,
        name: {
          english: "Ivysaur",
          japanese: "フシギソウ",
          chinese: "妙蛙草",
          french: "Herbizarre",
        },
        type: ["Grass", "Poison"],
        base: {
          HP: 60,
          Attack: 62,
          Defense: 63,
          "Sp. Attack": 80,
          "Sp. Defense": 80,
          Speed: 60,
        },
      },
    ];

    const output = formatPokemonTypes(input);
    const expectedOutput = [
      {
        pokemonId: 2,
        type: "Grass",
      },
      {
        pokemonId: 2,
        type: "Poison",
      },
    ];

    expect(output).toEqual(expectedOutput);
  });
});
