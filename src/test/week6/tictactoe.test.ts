import { TicTacToe } from "../../main/week6/tic-tac-toe";

describe("TicTacToe", () => {
  it("Should have an empty board on start", () => {
    let sut = new TicTacToe();
    expect(sut.board).toEqual([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
  it("Playing first move should play X", () => {
    let sut = new TicTacToe();
    expect(sut.play([0, 0]).board).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });
});
