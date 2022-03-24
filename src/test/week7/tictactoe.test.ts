import { Coordinate, TicTacToe } from "../../main/week7/tictactoe";

describe("TicTacToe", () => {
  it("Playing first move should play X", () => {
    let sut = new TicTacToe();
    expect(sut.play(new Coordinate(0, 0)).board.state).toEqual([
      ["X", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("Playing second move should play O", () => {
    let sut = new TicTacToe();
    let res = sut.play(new Coordinate(0, 0)).play(new Coordinate(0, 1));
    expect(res.board.state).toEqual([
      ["X", "O", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("Playing third move should play X", () => {
    let sut = new TicTacToe();
    let res = sut
      .play(new Coordinate(0, 0))
      .play(new Coordinate(0, 1))
      .play(new Coordinate(0, 2));
    expect(res.board.state).toEqual([
      ["X", "O", "X"],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("Playing 3 of the same counter in a column should result in a win (X)", () => {
    let sut = new TicTacToe();
    let res = sut
      .play(new Coordinate(0, 0))
      .play(new Coordinate(0, 1))
      .play(new Coordinate(1, 0))
      .play(new Coordinate(1, 1))
      .play(new Coordinate(2, 0));

    expect(res.board.state).toEqual([
      ["X", "O", ""],
      ["X", "O", ""],
      ["X", "", ""],
    ]);
    expect(res.result.value).toEqual("X");
  });

  it("Playing 3 of the same counter in a column should result in a win (O)", () => {
    let sut = new TicTacToe();
    let res = sut
      .play(new Coordinate(0, 0))
      .play(new Coordinate(0, 1))
      .play(new Coordinate(1, 0))
      .play(new Coordinate(1, 1))
      .play(new Coordinate(0, 2))
      .play(new Coordinate(2, 1));

    expect(res.board.state).toEqual([
      ["X", "O", "X"],
      ["X", "O", ""],
      ["", "O", ""],
    ]);
    expect(res.result.value).toEqual("O");
  });

  it("Playing 3 of the same counter in a row should result in a win (X)", () => {
    let sut = new TicTacToe();
    let res = sut
      .play(new Coordinate(0, 0))
      .play(new Coordinate(1, 0))
      .play(new Coordinate(0, 1))
      .play(new Coordinate(2, 0))
      .play(new Coordinate(0, 2));

    expect(res.board.state).toEqual([
      ["X", "X", "X"],
      ["O", "", ""],
      ["O", "", ""],
    ]);
    expect(res.result.value).toEqual("X");
  });

  it("Playing 3 of the same counter in a row should result in a win (O)", () => {
    let sut = new TicTacToe();
    let res = sut
      .play(new Coordinate(0, 0))
      .play(new Coordinate(1, 0))
      .play(new Coordinate(0, 1))
      .play(new Coordinate(1, 1))
      .play(new Coordinate(2, 2))
      .play(new Coordinate(1, 2));

    expect(res.board.state).toEqual([
      ["X", "X", ""],
      ["O", "O", "O"],
      ["", "", "X"],
    ]);
    expect(res.result.value).toEqual("O");
  });

  it("Playing 3 of the same counter diagonally should result in a win (X)", () => {
    let sut = new TicTacToe();
    let res = sut
      .play(new Coordinate(0, 0))
      .play(new Coordinate(1, 0))
      .play(new Coordinate(1, 1))
      .play(new Coordinate(2, 0))
      .play(new Coordinate(2, 2));

    expect(res.board.state).toEqual([
      ["X", "", ""],
      ["O", "X", ""],
      ["O", "", "X"],
    ]);
    expect(res.result.value).toEqual("X");
  });

  it("Playing in the same space should not alter the game", () => {
    let sut = new TicTacToe();
    let res = sut
      .play(new Coordinate(0, 0))
      .play(new Coordinate(0, 0))
      .play(new Coordinate(0, 1));

    expect(res.board.state).toEqual([
      ["X", "O", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
  });

  it("Should not be able to play after the game has been won", () => {
    let sut = new TicTacToe();
    let res = sut
      .play(new Coordinate(0, 0))
      .play(new Coordinate(2, 0))
      .play(new Coordinate(0, 1))
      .play(new Coordinate(2, 1))
      .play(new Coordinate(0, 2))
      .play(new Coordinate(2, 2));

    expect(res.board.state).toEqual([
      ["X", "X", "X"],
      ["", "", ""],
      ["O", "O", ""],
    ]);
    expect(res.result.value).toEqual("X");
  });

  it("Should return a draw if the game has no more moves", () => {
    let sut = new TicTacToe();
    let res = sut
      .play(new Coordinate(0, 0))
      .play(new Coordinate(0, 1))
      .play(new Coordinate(0, 2))
      .play(new Coordinate(1, 1))
      .play(new Coordinate(1, 0))
      .play(new Coordinate(1, 2))
      .play(new Coordinate(2, 1))
      .play(new Coordinate(2, 0))
      .play(new Coordinate(2, 2));

    expect(res.board.state).toEqual([
      ["X", "O", "X"],
      ["X", "O", "O"],
      ["O", "X", "X"],
    ]);
    expect(res.result.value).toEqual("D");
  });
});
