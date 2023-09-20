import { formatPokemon } from "../../utils/formatPokemon";

describe("formatPokemon", () => {
  it("should return an empty array when given an empty array", () => {
    const output = formatPokemon([]);
    expect(output).toEqual([]);
  });
});
