export const getFourRandomElems = (arr: any[]) => {
  return arr
    .map((elem) => ({ elem, val: Math.random() }))
    .sort((elem1, elem2) => elem1.val - elem2.val)
    .map((eachElem) => {
      const { elem } = eachElem;
      return elem;
    })
    .slice(0, 4);
};
