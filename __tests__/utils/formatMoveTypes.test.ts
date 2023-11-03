import { formatMoveTypes } from "../../utils/formatMoveTypes";

describe("formatMoveTypes", () => {
  it("should return an empty array when given an empty arrays", () => {
    expect(formatMoveTypes([])).toEqual([]);
  });

  it("should return an array with the move name and type", () => {
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

    const output = formatMoveTypes(input);
    const expectedOutput = [
      {
        move: "Absorb",
        type: "Grass",
      },
    ];

    expect(output).toEqual(expectedOutput);
  });

  it("should return an array with the move name and type for all moves", () => {
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

    const output = formatMoveTypes(input);
    const expectedOutput = [
      {
        move: "Absorb",
        type: "Grass",
      },
      {
        move: "Acid",
        type: "Poison",
      },
      {
        move: "Aurora beam",
        type: "Ice",
      },
    ];

    expect(output).toEqual(expectedOutput);
  });
});
