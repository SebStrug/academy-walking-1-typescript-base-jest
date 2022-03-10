import { PrimeFactors } from "../../main/week4/primefactors";

describe("Test prime factors", () => {
	let example: PrimeFactors;

	beforeEach(() => {
		example = new PrimeFactors();
	});

  it("should return a list containing 2", () => {
    expect(example.factors(2)).toEqual([2]);
  });

	it("should return a list containing 2, 3 when input is 6", () => {
    expect(example.factors(6)).toEqual([2, 3]);
  });

	it("should return a list containing 2, 2, 3 when input is 12", () => {
    expect(example.factors(12)).toEqual([2, 2, 3]);
  });

  it("should return an empty list when input is 1", () => {
    expect(example.factors(1)).toEqual([]);
  });  

  it("should return a list containing 3, 7 when input is 21", () => {
    expect(example.factors(21)).toEqual([3, 7]);
  });
	
	it("should return a list containing 5, 5 when input is 25", () => {
    expect(example.factors(25)).toEqual([5, 5]);
  });  
});