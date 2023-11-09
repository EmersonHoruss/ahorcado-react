import { LetterC } from "./LetterC";
import { StateLetterE } from "./StateLetterE";

export class KeyboardC {
  public static START_KEY: number = 65; // 65=A
  public static END_KEY: number = 90; // 90=Z
  private letters: LetterC[];
  constructor() {
    this.letters = [];
    for (let i = KeyboardC.START_KEY; i <= KeyboardC.END_KEY; i++) {
      this.letters.push(new LetterC(i));
    }
  }
  public hasBeenUsed(letter: string): boolean {
    const letterC: LetterC | null = this.getLetter(letter);
    return letterC ? letterC.hasBeenUsed() : false;
  }
  private getLetter(letter: string): LetterC | null {
    return (
      this.letters.find(
        (currentLetter: LetterC) => currentLetter.getLetter() === letter
      ) ?? null
    );
  }
  public setState(letter: string, state: StateLetterE): void {
    const letterC: LetterC | null = this.getLetter(letter);
    letterC?.setState(state);
  }
}
