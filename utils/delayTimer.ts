export const delayTimer = (delay: number = 1000) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, delay);
  });
};
