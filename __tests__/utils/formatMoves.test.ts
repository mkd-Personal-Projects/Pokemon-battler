import { formatMoves } from "../../utils/formatMoves";

describe("formatMoves", () => {
  it("should return an empty array when given an empty array", () => {
    expect(formatMoves([])).toEqual([]);
  });

  it("should remove the type property from the given pokemon", () => {
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
        moveName: "absorb",
        category: "special",
        power: 20,
        accuracy: 100,
        pp: 20,
      },
    ];

    expect(output).toEqual(expectedOutput);
  });
});
