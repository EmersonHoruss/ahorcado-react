import { KeyboardC } from "./KeyboardC";
import { randomNumber } from "../utils/utils";
import { words } from "../data/words";
import { StateGameE } from "./StateGameE";
import { StateLetterE } from "./StateLetterE";

export class GameC {
  private word: string;
  private keyboard: KeyboardC;
  private attempts: number;
  private state: StateGameE;
  public static ATTEMPTS: number = 5;
  constructor() {
    this.word = this.generateWord();
    this.keyboard = new KeyboardC();
    this.attempts = GameC.ATTEMPTS;
    this.state = StateGameE.started;
  }
  private generateWord(): string {
    const random = randomNumber(0, words.length);
    return words[random].word;
  }
  public setPlaying(): void {
    this.state = StateGameE.playing;
  }
  public setEnded(): void {
    this.state = StateGameE.ended;
  }
  public play(letter: string): void {
    const shouldSubtractAttempts = !this.word.includes(letter) && !this.keyboard.hasBeenUsed(letter)
    if (shouldSubtractAttempts) {
      this.attempts--
      this.keyboard.setState(letter,StateLetterE.wrong)
    } else {
      this.keyboard.setState(letter,StateLetterE.right)
    }
  }
}
