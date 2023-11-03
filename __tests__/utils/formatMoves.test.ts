import { formatMoves } from "../../utils/formatMoves";

describe("formatMoves", () => {
  it("should return an empty array when given an empty array", () => {
    expect(formatMoves([])).toEqual([]);
  });

  it("should remove the type property from the given move and turn the first letter of all string values to upper case ", () => {
    const input = [
      {
        moveName: "absorb",
        type: "grass",
        category: "special",
        power: 20,
        accuracy: 100,
        pp: 20,
      },
    ];

    const output = formatMoves(input);
    const expectedOutput = [
      {
        moveName: "Absorb",
        category: "Special",
        power: 20,
        accuracy: 100,
        pp: 20,
      },
    ];

    expect(output).toEqual(expectedOutput);
  });

  it("should work for multiple moves", () => {
    const input = [
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
    ];

    const output = formatMoves(input);
    const expectedOutput = [
      {
        moveName: "Absorb",
        category: "Special",
        power: 20,
        accuracy: 100,
        pp: 20,
      },
      {
        moveName: "Acid",
        category: "Physical",
        power: 40,
        accuracy: 100,
        pp: 30,
      },
      {
        moveName: "Aurora beam",
        category: "Special",
        power: 65,
        accuracy: 100,
        pp: 20,
      },
    ];

    expect(output).toEqual(expectedOutput);
  });
});