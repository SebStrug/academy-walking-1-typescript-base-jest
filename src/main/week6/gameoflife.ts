export class GameOfLife {
  board: ["*" | " "][];
  constructor(x: number, y: number, seed: [number, number][]) {
    this.board = new Array(y).fill(new Array(x).fill(""));
  }
  tick(): GameOfLife {
    return this;
  }
}
