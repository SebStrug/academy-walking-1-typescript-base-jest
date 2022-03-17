import { GameOfLife } from "../../main/week6/gameoflife";

describe("example test", () => {
  it("Should return an empty board with no seed", () => {
    let sut = new GameOfLife(2, 2);
    expect(sut.board).toEqual([
      [" ", " "],
      [" ", " "],
    ]);
  });

  it("Should return an empty board with seed", () => {
    let sut = new GameOfLife(2, 2, [
      [0, 0],
      [0, 1],
    ]);
    expect(sut.board).toEqual([
      ["*", "*"],
      [" ", " "],
    ]);
  });

  it("Should return a board of three with seed", () => {
    let sut = new GameOfLife(3, 3, [
      [0, 0],
      [0, 1],
    ]);
    expect(sut.board).toEqual([
      ["*", "*", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ]);
  });
});
