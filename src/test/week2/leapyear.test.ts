import { LeapYear } from "../../main/week2/leapyear";

describe("example test", () => {
  it("given the year 1996, should return true", () => {
    let example: LeapYear = new LeapYear();
    expect(example.isLeapYear(1996)).toBe(true);
  });

  it("given the year 2001 should return false", () => {
    let example: LeapYear = new LeapYear();
    expect(example.isLeapYear(2001)).toBe(false);
  });

  it("given the year 1900 should return false (atypical common year)", () => {
    let example: LeapYear = new LeapYear();
    expect(example.isLeapYear(1900)).toBe(false);
  });

  it("Given the year 2000, should return true (atypical leap year)", () => {
    let example: LeapYear = new LeapYear();
    expect(example.isLeapYear(2000)).toBe(true);
  });
});
