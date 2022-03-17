import { GameOfLife } from "../../main/week6/gameoflife";

describe("example test", () => {
  it("Should return an empty board with no seed", () => {
    let sut = new GameOfLife(2, 2);
    expect(sut.board).toEqual([
      [" ", " "],
      [" ", " "],
    ]);
  });
});
