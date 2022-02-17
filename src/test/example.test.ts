import {Example} from "../main/example";

describe('Test that type inputs are returned correctly', () => {
    it("should return a string upon getting a number", () => {
        let example: Example = new Example();
        expect(example.returnString(1)).toBe("1");
        expect(typeof example.returnString(2) == "string")
    })
})

describe('Test that a multiple of 3 returns a Fizz', () => {
    it("should return a 'Fizz'", () => {
        let example: Example = new Example();
        expect(example.returnString(3)).toBe("Fizz");
    })
    it("should return a 'Fizz'", () => {
        let example: Example = new Example();
        expect(example.returnString(6)).toBe("Fizz");
    })
    it("should return a 'Fizz'", () => {
        let example: Example = new Example();
        expect(example.returnString(9)).toBe("Fizz");
    })
})

describe('Only test numbers within desired range', () => {
    it("should return a an empty string", () => {
        let example: Example = new Example();
        expect(example.returnString(0)).toBe("");
    })
    it("should return a an empty string", () => {
        let example: Example = new Example();
        expect(example.returnString(101)).toBe("");
    })
})

describe('Test that a multiple of 5 returns a Buzz', () => {
    it("should return a 'Buzz'", () => {
        let example: Example = new Example();
        expect(example.returnString(5)).toBe("Buzz");
    })
    it("should return a 'Buzz'", () => {
        let example: Example = new Example();
        expect(example.returnString(20)).toBe("Buzz");
    })
    it("should return a 'Buzz'", () => {
        let example: Example = new Example();
        expect(example.returnString(100)).toBe("Buzz");
    })    
})

describe('Test that a multiple of 3 and 5 returns a FizzBuzz', () => {
    it("should return a 'FizzBuzz'", () => {
        let example: Example = new Example();
        expect(example.returnString(15)).toBe("FizzBuzz");
    })
    it("should return a 'FizzBuzz'", () => {
        let example: Example = new Example();
        expect(example.returnString(60)).toBe("FizzBuzz");
    })
    it("should return a 'FizzBuzz'", () => {
        let example: Example = new Example();
        expect(example.returnString(90)).toBe("FizzBuzz");
    })
})
