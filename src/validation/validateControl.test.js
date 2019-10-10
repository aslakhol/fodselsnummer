import { isValidControl } from "./validateControl";

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
