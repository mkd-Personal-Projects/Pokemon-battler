import { RawPokemon, formattedPokemon } from "../../db/data/rawPokemonTypes";
import { formatPokemon } from "../../utils/formatPokemon";

describe("formatPokemon", () => {
  it("should return an empty array when given an empty array", () => {
    const input: RawPokemon[] = [];
    const expectedOutput: formattedPokemon[] = [];

    const output: formattedPokemon[] = formatPokemon(input);

    expect(output).toEqual(expectedOutput);
  });

  it("should return an array with a formatted pokemon when given an array with one non-formatted pokemon", () => {
    const input: RawPokemon[] = [
      {
        id: 4,
        name: {
          english: "Charmander",
          japanese: "ヒトカゲ",
          chinese: "小火龙",
          french: "Salamèche",
        },
        type: ["Fire"],
        base: {
          HP: 39,
          Attack: 52,
          Defense: 43,
          "Sp. Attack": 60,
          "Sp. Defense": 50,
          Speed: 65,
        },
      },
    ];
    const expectedOutput: formattedPokemon[] = [
      {
        pokemonId: 4,
        pokemonName: "Charmander",
        type: "Fire",
        health: 39,
        attack: 52,
        defense: 43,
        splAttack: 60,
        splDefense: 50,
        speed: 65,
        level: 1,
      },
    ];

    const output: formattedPokemon[] = formatPokemon(input);

    expect(output).toEqual(expectedOutput);
  });

  it("should ignore pokemon with more than one type", () => {
    const input: RawPokemon[] = [
      {
        id: 1,
        name: {
          english: "Bulbasaur",
          japanese: "フシギダネ",
          chinese: "妙蛙种子",
          french: "Bulbizarre",
        },
        type: ["Grass", "Poison"],
        base: {
          HP: 45,
          Attack: 49,
          Defense: 49,
          "Sp. Attack": 65,
          "Sp. Defense": 65,
          Speed: 45,
        },
      },
    ];
    const expectedOutput: formattedPokemon[] = [];

    const output: formattedPokemon[] = formatPokemon(input);

    expect(output).toEqual(expectedOutput);
  });

  it("should format all pokemon with a single type and ignore all pokemon with multiple types", () => {
    const input: RawPokemon[] = [
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
      {
        id: 4,
        name: {
          english: "Charmander",
          japanese: "ヒトカゲ",
          chinese: "小火龙",
          french: "Salamèche",
        },
        type: ["Fire"],
        base: {
          HP: 39,
          Attack: 52,
          Defense: 43,
          "Sp. Attack": 60,
          "Sp. Defense": 50,
          Speed: 65,
        },
      },
      {
        id: 5,
        name: {
          english: "Charmeleon",
          japanese: "リザード",
          chinese: "火恐龙",
          french: "Reptincel",
        },
        type: ["Fire"],
        base: {
          HP: 58,
          Attack: 64,
          Defense: 58,
          "Sp. Attack": 80,
          "Sp. Defense": 65,
          Speed: 80,
        },
      },
      {
        id: 7,
        name: {
          english: "Squirtle",
          japanese: "ゼニガメ",
          chinese: "杰尼龟",
          french: "Carapuce",
        },
        type: ["Water"],
        base: {
          HP: 44,
          Attack: 48,
          Defense: 65,
          "Sp. Attack": 50,
          "Sp. Defense": 64,
          Speed: 43,
        },
      },
    ];
    const expectedOutput: formattedPokemon[] = [
      {
        pokemonId: 4,
        pokemonName: "Charmander",
        type: "Fire",
        health: 39,
        attack: 52,
        defense: 43,
        splAttack: 60,
        splDefense: 50,
        speed: 65,
        level: 1,
      },
      {
        pokemonId: 5,
        pokemonName: "Charmeleon",
        type: "Fire",
        health: 58,
        attack: 64,
        defense: 58,
        splAttack: 80,
        splDefense: 65,
        speed: 80,
        level: 1,
      },
      {
        pokemonId: 7,
        pokemonName: "Squirtle",
        type: "Water",
        health: 44,
        attack: 48,
        defense: 65,
        splAttack: 50,
        splDefense: 64,
        speed: 43,
        level: 1,
      },
    ];

    const output: formattedPokemon[] = formatPokemon(input);

    expect(output).toEqual(expectedOutput);
  });
});
