export const types = [
  {
    type: "Normal",
    strongAgainst: [],
    weakAgainst: ["Rock", "Steel"],
    doesNotEffect: ["Ghost"],
  },
  {
    type: "Fire",
    strongAgainst: ["Grass", "Ice", "Bug", "Steel"],
    weakAgainst: ["Fire", "Water", "Rock", "Dragon"],
    doesNotEffect: [],
  },
  {
    type: "Water",
    strongAgainst: ["Fire", "Ground", "Rock"],
    weakAgainst: ["Water", "Grass", "Dragon"],
    doesNotEffect: [],
  },
  {
    type: "Grass",
    strongAgainst: ["Water", "Ground", "Rock"],
    weakAgainst: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon"],
    doesNotEffect: [],
  },
  {
    type: "Electric",
    strongAgainst: ["Water", "Flying"],
    weakAgainst: ["Grass", "Electric", "Dragon"],
    doesNotEffect: ["Ground"],
  },
  {
    type: "Ice",
    strongAgainst: ["Grass", "Ground", "Flying", "Dragon"],
    weakAgainst: ["Fire", "Water", "Ice", "Steel"],
    doesNotEffect: [],
  },
  {
    type: "Fighting",
    strongAgainst: ["Normal", "Ice", "Rock", "Dark", "Steel"],
    weakAgainst: ["Poison", "Flying", "Psychic", "Bug", "Fairy"],
    doesNotEffect: ["Ghost"],
  },
  {
    type: "Poison",
    strongAgainst: ["Grass", "Fairy"],
    weakAgainst: ["Poison", "Ground", "Rock", "Ghost"],
    doesNotEffect: ["Steel"],
  },
  {
    type: "Ground",
    strongAgainst: ["Fire", "Electric", "Poison", "Rock", "Steel"],
    weakAgainst: ["Grass", "Bug"],
    doesNotEffect: ["Flying"],
  },
  {
    type: "Flying",
    strongAgainst: ["Grass", "Fighting", "Bug"],
    weakAgainst: ["Electric", "Rock", "Steel"],
    doesNotEffect: [],
  },
  {
    type: "Psychic",
    strongAgainst: ["Fighting", "Poison"],
    weakAgainst: ["Psychic", "Steel"],
    doesNotEffect: ["Dark"],
  },
  {
    type: "Bug",
    strongAgainst: ["Grass", "Psychic", "Dark"],
    weakAgainst: [
      "Fire",
      "Fighting",
      "Poison",
      "Flying",
      "Ghost",
      "Steel",
      "Fairy",
    ],
    doesNotEffect: [],
  },
  {
    type: "Rock",
    strongAgainst: ["Fire", "Ice", "Flying", "Bug"],
    weakAgainst: ["Fighting", "Ground", "Steel"],
    doesNotEffect: [],
  },
  {
    type: "Ghost",
    strongAgainst: ["Psychic", "Ghost"],
    weakAgainst: ["Dark"],
    doesNotEffect: ["Normal"],
  },
  {
    type: "Dragon",
    strongAgainst: ["Dragon"],
    weakAgainst: ["Steel"],
    doesNotEffect: ["Fairy"],
  },
  {
    type: "Dark",
    strongAgainst: ["Psychic", "Ghost"],
    weakAgainst: ["Fighting", "Dark", "Fairy"],
    doesNotEffect: [],
  },
  {
    type: "Steel",
    strongAgainst: ["Ice", "Rock", "Fairy"],
    weakAgainst: ["Fire", "Water", "Electric", "Steel"],
    doesNotEffect: [],
  },
  {
    type: "Fairy",
    strongAgainst: ["Fighting", "Dragon", "Dark"],
    weakAgainst: ["Fire", "Poison", "Steel"],
    doesNotEffect: [],
  },
];
