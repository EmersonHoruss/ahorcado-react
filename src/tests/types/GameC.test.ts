import { GameC } from "../../types/GameC";
import { KeyboardC } from "../../types/KeyboardC";
import { StateGameE } from "../../types/StateGameE";

describe("Test Game Class", () => {
  it("checks constructor", () => {
    const game = new GameC();
    expect(game.getWord().length).toBeGreaterThan(0);
    expect(game.getKeyboard()).toBeInstanceOf(KeyboardC);
    expect(game.getAttempts()).toBe(GameC.ATTEMPTS);
    expect(game.getState()).toBe(StateGameE.started);
  });
  it("checks playing and win", () => {
    const game = new GameC();
    const generatedWord = game.getWord();
    game.setPlaying();
    for (const letter of generatedWord) {
      game.play(letter);
      const lastPlay = letter === generatedWord[generatedWord.length - 1];
      if (lastPlay) {
        expect(game.getState()).toBe(StateGameE.won);
      } else {
        expect(game.getState()).toBe(StateGameE.playing);
      }
    }
    expect(game.getAttempts()).toBe(GameC.ATTEMPTS);
  });
  it("checks playing and lose", () => {
    const game = new GameC();
    game.setPlaying();
    for (let i = 0; i < GameC.ATTEMPTS; i++) {
      game.play(KeyboardC.INCORRECT_KEY);
      const lastPlay = i === GameC.ATTEMPTS - 1;
      if (lastPlay) {
        expect(game.getState()).toBe(StateGameE.losed);
      } else {
        expect(game.getState()).toBe(StateGameE.playing);
      }
    }
    expect(game.getAttempts()).toBe(0);
  });
});
