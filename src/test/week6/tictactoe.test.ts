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
  it("Playing second move gives a O", () => {
    let sut = new TicTacToe();
    expect(sut.play([0, 0]).play([0, 1]).board).toEqual([
      ["X", "O", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("Playing third move gives an X", () => {
    let sut = new TicTacToe();
    expect(sut.play([0, 0]).play([0, 1]).play([0, 2]).board).toEqual([
      ["X", "O", "X"],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("Playing three Xs in a column should result in a win", () => {
    let sut = new TicTacToe();
    expect(
      sut.play([0, 0]).play([0, 1]).play([1, 0]).play([0, 2]).play([2, 0])
        .winner
    ).toEqual("X");
  });

  it("Playing three Xs in a row should result in a win", () => {
    let sut = new TicTacToe();
    let res = sut
      .play([0, 0])
      .play([1, 0])
      .play([0, 1])
      .play([1, 1])
      .play([0, 2]);
    expect(res.winner).toEqual("X");
  });

  it("Playing three Xs diagonally should result in a win", () => {
    let sut = new TicTacToe();
    let res = sut
      .play([0, 0])
      .play([1, 0])
      .play([1, 1])
      .play([1, 0])
      .play([2, 2]);
    expect(res.winner).toEqual("X");
  });
});
