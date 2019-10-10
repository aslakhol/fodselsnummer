import { isValidIndivid, isValidControl } from "./validateFn";

describe("isValidIndivid", () => {
  it("returns false with too long number", () => {
    expect(isValidIndivid(1337)).toBe(false);
  });
  it("returns false with non number input", () => {
    expect(isValidIndivid("foo")).toBe(false);
  });
});

describe("isValidControl", () => {
  it("returns true with valid fodselsnummer", () => {
    expect(isValidControl("03079442703")).toBe(true);
  });
  it("returns true with valid fodselsnummer", () => {
    expect(isValidControl("13039334156")).toBe(true);
  });
  it("returns false with invalid fodselsnummer", () => {
    expect(isValidControl("03079455743")).toBe(false);
  });
  it("returns false with invalid fodselsnummer", () => {
    expect(isValidControl("13039335159")).toBe(false);
  });
  it("returns false with strings in fodselsnummer", () => {
    expect(isValidControl("13039s35s59")).toBe(false);
  });
});

// console.log("1:", weightedSum, weightedSum % 11, 11 - (weightedSum % 11), fn);
