/*

Only one level of indentation per method

Don’t use the ELSE keyword

Wrap all primitives and strings

First class collections (wrap all collections)

Only one dot per line dog.Body.Tail.Wag() => dog.ExpressHappiness()

No abbreviations

Keep all entities small

[10 files per package, 50 lines per class, 5 lines per method, 2 arguments per method]

No classes with more than two instance variables

No public getters/setters/properties


*/

class Counter {
  value: "X" | "O" = "X";
  next() {
    this.value = this.value === "X" ? "O" : "X";
  }
}

export class Board {
  state: [
    [string, string, string],
    [string, string, string],
    [string, string, string]
  ] = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ];

  set(move: Move, counter: Counter) {
    this.state[move.row][move.column] = counter.value;
  }

  checkWinner(counter: Counter): boolean {
    let hasWon = false;
    for (let index = 0; index < 3; index++) {
      hasWon =
        hasWon ||
        this.checkColumn(index, counter) ||
        this.checkRow(index, counter);
    }
    return hasWon;
  }

  checkColumn(column: number, counter: Counter): boolean {
    return (
      this.state[0][column] == counter.value &&
      this.state[1][column] == counter.value &&
      this.state[2][column] == counter.value
    );
  }

  checkRow(row: number, counter: Counter): boolean {
    return (
      this.state[row][0] == counter.value &&
      this.state[row][1] == counter.value &&
      this.state[row][2] == counter.value
    );
  }
}

export class Move {
  row: number;
  column: number;
  constructor(row: number, column: number) {
    this.row = row;
    this.column = column;
  }
}

export class TicTacToe {
  board: Board = new Board();
  counter: Counter = new Counter();
  winner: null | Counter = null;

  play(move: Move): TicTacToe {
    this.board.set(move, this.counter);
    if (this.board.checkWinner(this.counter)) {
      this.winner = this.counter;
      return this;
    }
    this.counter.next();
    return this;
  }
}
