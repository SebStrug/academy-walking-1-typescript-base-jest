export class Fib {
  getNumber(n: number): number {
    if (n < 0) {
        throw Error("ValidationError")
    }

    if (n === 2) {
      return 1;
    } else if (n === 1) {
      return 1;
    } else if (n === 0) {
      return 0;
    }
    return this.getNumber(n - 1) + this.getNumber(n - 2);
  }
}
