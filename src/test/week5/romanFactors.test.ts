import { RomanNumbers } from "../../main/week5/romanNumbers";

describe("Test roman numbers", () => {
	it.each([
		['I', 1],
		['II', 2],
		['III', 3],
		['IV', 4],
    ['V', 5],
		['VI', 6],
		['VII', 7],
		['VIII', 8],
		['IX', 9],
		['X', 10],
	])("should return %s when given %s", (expected, given) => {
    let example = new RomanNumbers();
    expect(example.for(given)).toBe(expected);
  });
});