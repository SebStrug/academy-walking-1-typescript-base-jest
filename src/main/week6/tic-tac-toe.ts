export class TicTacToe {
  board: [
    [string, string, string],
    [string, string, string],
    [string, string, string]
  ];
  move: "X" | "O";

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.move = "X";
  }

  public play([x, y]: [number, number]): TicTacToe {
    this.board[x][y] = this.move;
    this.move = this.move === "X" ? "O" : "X";
    return this;
  }
}
