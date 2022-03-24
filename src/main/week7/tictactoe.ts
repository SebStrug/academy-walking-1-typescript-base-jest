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

  play(move: Move): TicTacToe {
    this.board.set(move, this.counter);
    this.counter.next();
    return this;
  }
}
