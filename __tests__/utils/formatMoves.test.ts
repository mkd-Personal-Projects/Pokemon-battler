import { formatMoves } from "../../utils/formatMoves";

describe("formatMoves", () => {
  it("should return an empty array when given an empty object", () => {
    expect(formatMoves({})).toEqual([]);
  });

  it("should return a simplified move with only the move name, category, power, accuracy and pp of the given move", () => {
    const input = {
      absorb: {
        num: 71,
        accuracy: 100,
        basePower: 20,
        category: "Special",
        name: "Absorb",
        pp: 25,
        priority: 0,
        flags: { protect: 1, mirror: 1, heal: 1 },
        drain: [1, 2],
        secondary: null,
        target: "normal",
        type: "Grass",
        contestType: "Clever",
        desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        shortDesc: "User recovers 50% of the damage dealt.",
      },
    };

    const output = formatMoves(input);
    const expectedOutput = [
      {
        moveName: "Absorb",
        category: "Special",
        power: 20,
        accuracy: 100,
        pp: 25,
      },
    ];

    expect(output).toEqual(expectedOutput);
  });

  it("should ignore moves with a 0 as the value of the basePower property", () => {
    const input = {
      amnesia: {
        num: 133,
        accuracy: true,
        basePower: 0,
        category: "Status",
        name: "Amnesia",
        pp: 20,
        priority: 0,
        flags: { snatch: 1 },
        boosts: { spd: 2 },
        secondary: null,
        target: "self",
        type: "Psychic",
        zMove: { effect: "clearnegativeboost" },
        contestType: "Cute",
        desc: "Raises the user's Special Defense by 2 stages.",
        shortDesc: "Raises the user's Sp. Def by 2.",
      },
    };

    expect(formatMoves(input)).toEqual([]);
  });

  it("should work for multiple moves", () => {
    const input = {
      absorb: {
        num: 71,
        accuracy: 100,
        basePower: 20,
        category: "Special",
        name: "Absorb",
        pp: 25,
        priority: 0,
        flags: { protect: 1, mirror: 1, heal: 1 },
        drain: [1, 2],
        secondary: null,
        target: "normal",
        type: "Grass",
        contestType: "Clever",
        desc: "The user recovers 1/2 the HP lost by the target, rounded half up. If Big Root is held by the user, the HP recovered is 1.3x normal, rounded half down.",
        shortDesc: "User recovers 50% of the damage dealt.",
      },
      accelerock: {
        num: 709,
        accuracy: 100,
        basePower: 40,
        category: "Physical",
        name: "Accelerock",
        pp: 20,
        priority: 1,
        flags: { contact: 1, protect: 1, mirror: 1 },
        secondary: null,
        target: "normal",
        type: "Rock",
        contestType: "Cool",
        desc: "No additional effect.",
        shortDesc: "Usually goes first.",
      },
      acid: {
        num: 51,
        accuracy: 100,
        basePower: 40,
        category: "Special",
        name: "Acid",
        pp: 30,
        priority: 0,
        flags: { protect: 1, mirror: 1 },
        secondary: { chance: 10, boosts: { spd: -1 } },
        target: "allAdjacentFoes",
        type: "Poison",
        contestType: "Clever",
        desc: "Has a 10% chance to lower the target's Special Defense by 1 stage.",
        shortDesc: "10% chance to lower the foe(s) Sp. Def by 1.",
      },
      amnesia: {
        num: 133,
        accuracy: true,
        basePower: 0,
        category: "Status",
        name: "Amnesia",
        pp: 20,
        priority: 0,
        flags: { snatch: 1 },
        boosts: { spd: 2 },
        secondary: null,
        target: "self",
        type: "Psychic",
        zMove: { effect: "clearnegativeboost" },
        contestType: "Cute",
        desc: "Raises the user's Special Defense by 2 stages.",
        shortDesc: "Raises the user's Sp. Def by 2.",
      },
    };

    const output = formatMoves(input);
    const expectedOutput = [
      {
        moveName: "Absorb",
        category: "Special",
        power: 20,
        accuracy: 100,
        pp: 25,
      },
      {
        moveName: "Accelerock",
        category: "Physical",
        power: 40,
        accuracy: 100,
        pp: 20,
      },
      {
        moveName: "Acid",
        category: "Special",
        power: 40,
        accuracy: 100,
        pp: 30,
      },
    ];

    expect(output).toEqual(expectedOutput);
  });
});
