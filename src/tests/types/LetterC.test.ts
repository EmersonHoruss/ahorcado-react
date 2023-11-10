import { LetterC } from "../../types/LetterC";
import { StateLetterE } from "../../types/StateLetterE";

describe("Test Letter Class", () => {
  it("checks constructor", () => {
    const letter = new LetterC(65);
    expect(letter.getAscii()).toBe(65);
    expect(letter.getState()).toBe(StateLetterE.started);
  });
  it("checks set state", () => {
    const letter = new LetterC(65);
    letter.setState(StateLetterE.right);
    expect(letter.getState()).toBe(StateLetterE.right);
  });
  it("checks get letter", () => {
    const letter = new LetterC(65);
    expect(letter.getLetter()).toBe("A");
  });
  it("checks has been used", () => {
    const letter = new LetterC(65);
    letter.setState(StateLetterE.right);
    expect(letter.hasBeenUsed()).toBeTruthy();
  });
  it("checks has not been used", () => {
    const letter = new LetterC(65);
    expect(letter.hasBeenUsed()).toBeFalsy();
  });
  it("checks is right", () => {
    const letter = new LetterC(65);
    letter.setState(StateLetterE.right);
    expect(letter.isRight()).toBeTruthy();
  });
  it("checks is not right", () => {
    const letter = new LetterC(65);
    letter.setState(StateLetterE.wrong);
    expect(letter.isRight()).toBeFalsy();
  });
});
