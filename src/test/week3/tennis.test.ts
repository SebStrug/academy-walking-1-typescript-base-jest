import { Tennis } from "../../main/week3/tennis";

describe("Tennis test", () => {
  it.each([
    [4, 0, "player 1 win"],
    [0, 4, "player 2 win"],
    [0, 1, "player 1 love, player 2 fifteen"],
    [2, 3, "player 1 thirty, player 2 forty"],
    [3, 4, "player 2 advantage"],
    [4, 4, "deuce"],
    [5, 5, "deuce"],
    [2, 2, "thirty all"],
    [5, 4, "player 1 advantage"],
    [0, 0, "love all"],
    [4, 6, "player 2 win"],
    [5, 6, "player 2 advantage"],
    [1, 2, "player 1 fifteen, player 2 thirty"],
    [5, 3, "player 1 win"],
  ])(
    "%s points to player 1, %s points to player2 results in: %s",
    (player1Score, player2Score, expectedString) => {
      let game: Tennis = new Tennis();
      expect(game.score(player1Score, player2Score)).toBe(expectedString);
    }
  );

  it.each([
      [10, 1, "ValidationError"],
      [-1, -2, "ValidationError"],
      [-1, 200, "ValidationError"],
  ])(
    "%s points to player 1, %s points to player2 raises an error",
    (player1Score, player2Score, expectedError) => {
        let game: Tennis = new Tennis();
        expect(() => game.score(player1Score, player2Score)).toThrowError(expectedError);            
    }
  );
});
