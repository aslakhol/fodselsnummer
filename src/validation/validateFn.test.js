import { isValidIndivid } from "./validateFn";

describe("isValidIndivid", () => {
  it("returns false with too long number", () => {
    expect(isValidIndivid(1337)).toBe(false);
  });
  it("returns false with non number input", () => {
    expect(isValidIndivid("foo")).toBe(false);
  });
});

// console.log("1:", weightedSum, weightedSum % 11, 11 - (weightedSum % 11), fn);
