enum Player {
  Player1 = "player 1",
  Player2 = "player 2",
  All = "all",
}
enum Outcome {
  Win = "win",
  Love = "love",
  Fifteen = "fifteen",
  Thirty = "thirty",
  Forty = "forty",
  Advantage = "advantage",
  Deuce = "deuce",
}

type OutcomeMap = { [index: number]: Outcome };

const outcomeMap: OutcomeMap = {
  0: Outcome.Love,
  1: Outcome.Fifteen,
  2: Outcome.Thirty,
  3: Outcome.Forty,
};

const winningThreshold = 4;
const deuceThreshold = 3;

export class Tennis {
  public score(player1Score: number, player2Score: number): string {
    this.validate(player1Score, player2Score);

    if (this.isAdvantage(player1Score, player2Score)) {
      return `${this.advantagePlayer(player1Score, player2Score)} ${Outcome.Advantage}`;
    }

    if (this.isDeuce(player1Score, player2Score)) {
      return Outcome.Deuce;
    }
    if (this.isWin(player1Score, player2Score)) {
      return `${this.advantagePlayer(player1Score, player2Score)} ${Outcome.Win}`;
    }

    const player1Outcome: Outcome = outcomeMap[player1Score];
    const player2Outcome: Outcome = outcomeMap[player2Score];

    if (this.isDraw(player1Outcome, player2Outcome)) {
      return `${player1Outcome} ${Player.All}`;
    }

    return `${Player.Player1} ${player1Outcome}, ${Player.Player2} ${player2Outcome}`;
  }

    private advantagePlayer(player1Score: number, player2Score: number) {
        return player1Score > player2Score ? Player.Player1 : Player.Player2;
    }

    private scoreDifference(player1Score: number, player2Score: number) {
        return Math.abs(player1Score - player2Score);
    }

    private maxScore(player1Score: number, player2Score: number) {
        return Math.max(player1Score, player2Score);
    }

    private validate(player1Score: number, player2Score: number) {
        if (this.maxScore(player1Score, player2Score) > winningThreshold && this.scoreDifference(player1Score, player2Score) > 2) {
            throw new Error("ValidationError");
        }
        if (player1Score < 0 || player2Score < 0) {
            throw new Error("ValidationError");
        }
    }

    private isDraw(player1Outcome: Outcome, player2Outcome: Outcome) {
        return player1Outcome === player2Outcome;
    }

  private isWin(player1Score: number, player2Score: number): boolean {
      return this.maxScore(player1Score, player2Score) >= winningThreshold;
  }

  private isAdvantage(player1Score: number, player2Score: number) {
      return this.scoreDifference(player1Score, player2Score) === 1 && this.maxScore(player1Score, player2Score) > deuceThreshold;
  }

  private isDeuce(player1Score: number, player2Score: number): boolean {
    return player1Score === player2Score && player1Score >= deuceThreshold
  }
  
}
