import { Move, TicTacToe } from "../../main/week7/tictactoe";

describe("TicTacToe", () => {
  it("Playing first move should play X", () => {
    let sut = new TicTacToe();
    expect(sut.play(new Move(0, 0)).board.state).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("Playing second move should play O", () => {
    let sut = new TicTacToe();
    let res = sut.play(new Move(0, 0)).play(new Move(0, 1));
    expect(res.board.state).toEqual([
      ["X", "", ""],
      ["O", "", ""],
      ["", "", ""],
    ]);
  });
});
