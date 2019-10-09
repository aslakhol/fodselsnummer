import {
  isValidDob,
  isValidIndivid,
  isValidDay,
  isValidMonth,
  isValidYear
} from "./validateFn";

describe("isValidDob ", () => {
  it("returns true with valid date", () => {
    expect(isValidDob("120969")).toEqual(true);
  });
  it("fails with to long string", () => {
    expect(isValidDob("40s0393")).toEqual(false);
  });
  it("fails with invalid day", () => {
    expect(isValidDob("550393")).toEqual(false);
  });
  it("fails with invalid month", () => {
    expect(isValidDob("221393")).toEqual(false);
  });
  it("fails with invalid year", () => {
    expect(isValidDob("2210-2")).toEqual(false);
  });
});

describe("isValidDay", () => {
  it("returns true with correct day and month", () => {
    expect(isValidDay(31, 1)).toEqual(true);
  });
  it("returns false with day over max for month", () => {
    expect(isValidDay(32, 1)).toEqual(false);
  });
  it("returns false with day under 0", () => {
    expect(isValidDay(-3, 1)).toEqual(false);
  });
  it("returns false with month above 12", () => {
    expect(isValidDay(31, 19)).toEqual(false);
  });
  it("returns false with strings as input", () => {
    expect(isValidDay("foo", "bar")).toEqual(false);
  });
});

describe("isValidMonth", () => {
  it("returns true with correct month", () => {
    expect(isValidMonth(1)).toEqual(true);
  });
  it("returns false with month under 1", () => {
    expect(isValidMonth(-1)).toEqual(false);
  });
  it("returns false with month above 12", () => {
    expect(isValidMonth(13)).toEqual(false);
  });
  it("returns false with strings as input", () => {
    expect(isValidMonth("foo")).toEqual(false);
  });
});

describe("isValidYear", () => {
  it("returns true with valid year", () => {
    expect(isValidYear(69)).toEqual(true);
  });
  it("returns false with year under 0", () => {
    expect(isValidYear(-1)).toEqual(false);
  });
  it("returns false with year above 99", () => {
    expect(isValidYear(404)).toEqual(false);
  });
  it("returns false with strings as input", () => {
    expect(isValidYear("foo")).toEqual(false);
  });
});

it("returns false", () => {
  expect(isValidIndivid(2)).toBe(false);
});
