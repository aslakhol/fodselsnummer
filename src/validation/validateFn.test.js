import { isValidIndivid, isValidFodselsnummer } from "./validateFn";

describe("isValidFodselsnummer", () => {
  it("returns true with valid fodselsnummer", () => {
    expect(isValidFodselsnummer("13033345296")).toBe(true);
  });
  it("returns false with too long string", () => {
    expect(isValidFodselsnummer("13033223345296")).toBe(false);
  });
  it("returns false with too short string", () => {
    expect(isValidFodselsnummer("1337")).toBe(false);
  });
});

describe("isValidIndivid", () => {
  it("returns false with too long number", () => {
    expect(isValidIndivid(1337)).toBe(false);
  });
  it("returns false with non number input", () => {
    expect(isValidIndivid("foo")).toBe(false);
  });
});
