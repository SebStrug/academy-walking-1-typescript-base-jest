export type Counter = "*" | " ";
export class GameOfLife {
  board: Counter[][];
  constructor(x: number, y: number, seed: [number, number][] = []) {
    // this.board = new Array(y).fill(new Array(x).fill(" "));
    this.board = [
      [" ", " "],
      [" ", " "],
    ];
    for (let s of seed) {
      this.board[s[0]][s[1]] = "*";
    }
  }
  tick(): GameOfLife {
    return this;
  }
}
