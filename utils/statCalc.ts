import { pokemonStats } from "../db/data/TsPokemonTypes";

const statCalc = (stat: number, level: number) => {
  const assumedIv = 31; // 31 being the highest iv possible

  const doubleStat = 2 * stat;
  const addIv = doubleStat + assumedIv;
  const timesLevel = addIv * level;
  const finalAns = Math.floor(timesLevel / 100);

  return finalAns;
};

export const calculateStats: (stats: pokemonStats) => pokemonStats = ({
  health,
  attack,
  defense,
  splAttack,
  splDefense,
  speed,
  level,
}) => {
  const hpModifier = level + 10;
  const statModifier = 5;

  const newHp = statCalc(health, level) + hpModifier;
  const newAttack = statCalc(attack, level) + statModifier;
  const newDefense = statCalc(defense, level) + statModifier;
  const newSplAttack = statCalc(splAttack, level) + statModifier;
  const newSplDefense = statCalc(splDefense, level) + statModifier;
  const newSpeed = statCalc(speed, level) + statModifier;

  return {
    health: newHp,
    attack: newAttack,
    defense: newDefense,
    splAttack: newSplAttack,
    splDefense: newSplDefense,
    speed: newSpeed,
    level,
  };
};
