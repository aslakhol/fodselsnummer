import { isValidIndivid } from "./validateFn";

it("returns false", () => {
  expect(isValidIndivid(2)).toBe(false);
});
