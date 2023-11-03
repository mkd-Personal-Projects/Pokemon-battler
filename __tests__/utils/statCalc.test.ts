const { calculateStats } = require("../../utils/statCalc.ts");

describe("calculateHp", () => {
  it("should use a formula to calculate the base stats of a pokemon at a given level assuming 100% iv's and no ev's", () => {
    const inputStats = {
      health: 1,
      attack: 1,
      defense: 1,
      splAttack: 1,
      splDefense: 1,
      speed: 1,
      level: 1,
    };

    const expectedOutput = {
      health: 11,
      attack: 5,
      defense: 5,
      splAttack: 5,
      splDefense: 5,
      speed: 5,
      level: 1,
    };

    expect(calculateStats(inputStats)).toEqual(expectedOutput);
  });

  it("should correctly calculate bulbasaurs base stats at level 50", () => {
    const inputStats = {
      health: 45,
      attack: 49,
      defense: 49,
      splAttack: 65,
      splDefense: 65,
      speed: 45,
      level: 50,
    };

    const expectedOutput = {
      health: 120,
      attack: 69,
      defense: 69,
      splAttack: 85,
      splDefense: 85,
      speed: 65,
      level: 50,
    };

    expect(calculateStats(inputStats)).toEqual(expectedOutput);
  });

  it("should correctly calculate squirtles base stats at level 50", () => {
    const inputStats = {
      health: 44,
      attack: 48,
      defense: 65,
      splAttack: 50,
      splDefense: 64,
      speed: 43,
      level: 50,
    };

    const expectedOutput = {
      health: 119,
      attack: 68,
      defense: 85,
      splAttack: 70,
      splDefense: 84,
      speed: 63,
      level: 50,
    };

    expect(calculateStats(inputStats)).toEqual(expectedOutput);
  });

  it("should correctly calculate garchomps base stats at level 78", () => {
    const inputStats = {
      health: 108,
      attack: 130,
      defense: 95,
      splAttack: 80,
      splDefense: 85,
      speed: 102,
      level: 78,
    };

    const expectedOutput = {
      health: 280,
      attack: 231,
      defense: 177,
      splAttack: 153,
      splDefense: 161,
      speed: 188,
      level: 78,
    };

    expect(calculateStats(inputStats)).toEqual(expectedOutput);
  });
});
