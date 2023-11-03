const { calculateHp } = require("../../utils/statCalc.ts");

describe("calculateHp", () => {
  it("should use a formula to calculate the hp of a pokemon at a given level assuming 100% iv's and no ev's", () => {
    const hpStat = 1;
    const level = 1;
    expect(calculateHp(hpStat, level)).toEqual(11);
  });

  it("should correctly calculate bulbasaurs hp stat at level 50", () => {
    const hpStat = 45;
    const level = 50;
    expect(calculateHp(hpStat, level)).toEqual(120);
  });

  it("should correctly calculate squirtles hp stat at level 50", () => {
    const hpStat = 44;
    const level = 50;
    expect(calculateHp(hpStat, level)).toEqual(119);
  });

  it("should correctly calculate garchomps hp stat at level 78", () => {
    const hpStat = 108;
    const level = 78;
    expect(calculateHp(hpStat, level)).toEqual(280);
  });
});
