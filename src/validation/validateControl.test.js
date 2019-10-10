import { isValidControl } from "./validateControl";

describe("isValidControl", () => {
  it("returns true with valid fodselsnummer", () => {
    expect(isValidControl([1, 3, 0, 3, 3, 3, 4, 5, 2, 9, 6])).toBe(true);
  });
  it("returns true with valid fodselsnummer", () => {
    expect(isValidControl([2, 3, 0, 7, 4, 4, 0, 4, 4, 2, 1])).toBe(true);
  });
  it("returns false with invalid fodselsnummer", () => {
    expect(isValidControl([0, 3, 0, 7, 9, 4, 5, 5, 7, 4, 3])).toBe(false);
  });
  it("returns false with invalid fodselsnummer", () => {
    expect(isValidControl([1, 3, 0, 3, 9, 3, 3, 5, 1, 5, 9])).toBe(false);
  });
  it("returns false with strings in fodselsnummer", () => {
    expect(isValidControl([1, 3, 0, 3, 9, "s", 3, 5, "s", 5, 9])).toBe(false);
  });
});
