import { formatPokemonMoves } from "../../utils/formatPokemonMoves";

describe.skip("formatPokemonMoves", () => {
  it("should return an empty array when given two empty arrays", () => {
    expect(formatPokemonMoves([], [])).toEqual([]);
  });

  it("should take the id of a pokemon and the name of a move (converted to upper case) and combine them in a new object when at least of one the types of the pokemon and the type of the move are the same", () => {
    const pokemonInput = [
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
    const moveInput = [
      {
        moveName: "absorb",
        type: "grass",
        category: "special",
        power: 20,
        accuracy: 100,
        pp: 20,
      },
    ];

    expect(formatPokemonMoves(pokemonInput, moveInput)).toEqual([
      { pokemonId: 1, move: "Absorb" },
    ]);
  });

  it("should create a new obj for each move which matches the pokemon type while ignoring any which do not match", () => {
    const pokemonInput = [
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
    const moveInput = [
      {
        moveName: "absorb",
        type: "grass",
        category: "special",
        power: 20,
        accuracy: 100,
        pp: 20,
      },
      {
        moveName: "acid",
        type: "poison",
        category: "physical",
        power: 40,
        accuracy: 100,
        pp: 30,
      },
      {
        moveName: "aurora beam",
        type: "ice",
        category: "special",
        power: 65,
        accuracy: 100,
        pp: 20,
      },
      {
        moveName: "poison sting",
        type: "poison",
        category: "physical",
        power: 15,
        accuracy: 100,
        pp: 35,
      },
    ];

    expect(formatPokemonMoves(pokemonInput, moveInput)).toEqual([
      { pokemonId: 1, move: "Absorb" },
      { pokemonId: 1, move: "Acid" },
      { pokemonId: 1, move: "Poison sting" },
    ]);
  });
});
