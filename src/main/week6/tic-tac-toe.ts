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

  private checkWinner(player: "X" | "O"): "" | "X" | "O" {
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] == player &&
        this.board[1][i] == player &&
        this.board[2][i] == player
      ) {
        return player;
      }

      if (
        this.board[i][0] == player &&
        this.board[i][1] == player &&
        this.board[i][2] == player
      ) {
        return player;
      }
    }
    if (
      this.board[0][0] == player &&
      this.board[1][1] == player &&
      this.board[2][2] == player
    ) {
      return player;
    }
    return "";
  }

  public play([x, y]: [number, number]): TicTacToe {
    if (this.board[x][y]) {
      return this;
    }
    this.board[x][y] = this.move;
    this.winner = this.checkWinner(this.move);
    this.move = this.move === "X" ? "O" : "X";
    return this;
  }
}
