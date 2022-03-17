export type Counter = "*" | " ";
export class GameOfLife {
  board: Counter[][];
  constructor(x: number, y: number, seed: [number, number][] = []) {
    this.board = [];
    for (let i = 0; i < y; i++) {
      this.board.push([]);
      for (let j = 0; j < x; j++) {
        this.board[i].push(" ");
      }
    }
    for (let s of seed) {
      this.board[s[0]][s[1]] = "*";
    }
  }
  tick(): GameOfLife {
    return this;
  }
}
