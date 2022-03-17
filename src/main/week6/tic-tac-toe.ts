export class TicTacToe {
  board: [
    [string, string, string],
    [string, string, string],
    [string, string, string]
  ];
  move: "X" | "O";
  // D for draw, empty string for no winnner yet
  winner: "" | "X" | "O" | "D";

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    this.move = "X";
    this.winner = "";
  }

  private checkWinner(): "" | "X" {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] == "X" &&
        this.board[1][i] == "X" &&
        this.board[2][i] == "X"
      ) {
        return "X";
      }

      if (
        this.board[i][0] == "X" &&
        this.board[i][1] == "X" &&
        this.board[i][2] == "X"
      ) {
        return "X";
      }

      if (
        this.board[i][i] == "X" &&
        this.board[i][i] == "X" &&
        this.board[i][i] == "X"
      ) {
        return "X";
      }
    }
    return "";
  }

  public play([x, y]: [number, number]): TicTacToe {
    this.board[x][y] = this.move;
    this.winner = this.checkWinner();
    this.move = this.move === "X" ? "O" : "X";
    return this;
  }
}
