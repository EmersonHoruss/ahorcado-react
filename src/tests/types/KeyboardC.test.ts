import { KeyboardC } from "../../types/KeyboardC";
import { StateLetterE } from "../../types/StateLetterE";

describe("Test Keyboard Class", () => {
  it("checks constructor", () => {
    const keyboard = new KeyboardC();
    const numberOfLetters = KeyboardC.END_KEY - KeyboardC.START_KEY + 1;
    const A = keyboard.getLetters()[0].getLetter();
    const Z = keyboard
      .getLetters()
      [keyboard.getLetters().length - 1].getLetter();
    expect(A).toBe("A");
    expect(Z).toBe("Z");
    console.log(keyboard.getLetters().length);
    expect(numberOfLetters).toEqual(keyboard.getLetters().length);
  });
  it("checks set state", () => {
    const keyboard = new KeyboardC();
    keyboard.setState("A", StateLetterE.right);
    expect(keyboard.getLetters()[0].getState()).toBe(StateLetterE.right);
  });
  it("checks completed", () => {
    const word = "word";
    const keyboard = new KeyboardC();
    keyboard.setState("W", StateLetterE.right);
    keyboard.setState("O", StateLetterE.right);
    keyboard.setState("R", StateLetterE.right);
    keyboard.setState("D", StateLetterE.right);
    expect(keyboard.completed(word)).toBeTruthy();
  });
  it("checks incompleted", () => {
    const word = "word";
    const keyboard = new KeyboardC();
    keyboard.setState("W", StateLetterE.right);
    keyboard.setState("O", StateLetterE.right);
    keyboard.setState("R", StateLetterE.right);
    expect(keyboard.completed(word)).toBeFalsy();
  });
});
