export const calculateHp = (hp: number, level: number) => {
  const assumedIv = 31; // 31 being the highest iv possible

  const doubleHp = 2 * hp;
  const addIv = doubleHp + assumedIv;
  const timesLevel = addIv * level;
  const divideHundo = Math.floor(timesLevel / 100);
  const addLevel = divideHundo + level;
  const finalAns = addLevel + 10;

  return finalAns;
};

export const calculateStats = (hp: number, level: number) => {
  const assumedIv = 31; // 31 being the highest iv possible

  const doubleHp = 2 * hp;
  const addIv = doubleHp + assumedIv;
  const timesLevel = addIv * level;
  const divideHundo = Math.floor(timesLevel / 100);
  const addLevel = divideHundo + level;
  const finalAns = addLevel + 5;

  return finalAns;
};
