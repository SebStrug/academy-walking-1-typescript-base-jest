import { Fib } from "../../main/week2/fib";

describe("example test", () => {
  it.each`
    given | returns
    ${0}  | ${0}
    ${1}  | ${1}
    ${2}  | ${1}
    ${3}  | ${2}
    ${9}  | ${34}
  `("Given $given, returns $returns", ({ given, returns }) => {
    let example = new Fib();
    expect(example.getNumber(given)).toBe(returns);
  });

  it("Given -1, should throw an error", () => {
    let example = new Fib();
    expect(() => example.getNumber(-1)).toThrowError("ValidationError");
  });
});
