export class TicTacToe {
  board: [
    [string, string, string],
    [string, string, string],
    [string, string, string]
  ];

  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
  }

  public play(move: [number, number]): TicTacToe {
    return this;
  }
}
