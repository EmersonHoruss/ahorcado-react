import { GameC } from "../../types/GameC";
import { KeyboardC } from "../../types/KeyboardC";
import { LetterC } from "../../types/LetterC";
import { StateGameE } from "../../types/StateGameE";
import { StateLetterE } from "../../types/StateLetterE";

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
      game.play(KeyboardC.NOT_FOUND_KEY);
      const lastPlay = i === GameC.ATTEMPTS - 1;
      if (lastPlay) {
        expect(game.getState()).toBe(StateGameE.losed);
      } else {
        expect(game.getState()).toBe(StateGameE.playing);
      }
    }
    expect(game.getAttempts()).toBe(0);
  });
  it("checks status key well", () => {
    const game: GameC = new GameC();
    const word: string = game.getWord();
    const wrongLetter: string | null = game.getKeyboard().getWrongLetter(word);
    if (!!wrongLetter) {
      game.play(wrongLetter);
      const wrongLetterC: LetterC | null =
        game
          .getKeyboard()
          .getLetters()
          .find((letter: LetterC) => letter.getLetter() === wrongLetter) ??
        null;
      if (!!wrongLetterC) {
        expect(wrongLetterC.getState()).toBe(StateLetterE.wrong);
      }
    }
  });
});
