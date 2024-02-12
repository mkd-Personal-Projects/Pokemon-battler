import { getFourRandomElems } from "../../utils/getFourRandomElems";

describe("getFourRandomElems", () => {
  it("should return an empty array when given an empty array", () => {
    expect(getFourRandomElems([])).toEqual([]);
  });

  it("should return a new array ", () => {
    const input = [1];
    const output = getFourRandomElems(input);

    expect(input).not.toBe(output);
  });

  it("should return an array with 4 elements", () => {
    const input = [1, 2, 3, 4, 5];

    const output = getFourRandomElems(input);
    const expectedOutput = 4;

    expect(output.length).toBe(expectedOutput);
  });

  it("should only contain elements that existed in the original input array", () => {
    const input = [1, 2, 3, 4, 5];

    const output = getFourRandomElems(input);

    output.forEach((elem) => {
      expect(input.includes(elem)).toBe(true);
    });
  });
});
