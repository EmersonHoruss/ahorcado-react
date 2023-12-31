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
  public static ATTEMPTS: number = 6;
  constructor() {
    this.word = this.generateWord();
    this.keyboard = new KeyboardC();
    this.attempts = GameC.ATTEMPTS;
    this.state = StateGameE.started;
  }
  private generateWord(): string {
    const random = randomNumber(0, words.length - 1);
    return words[random].word.toUpperCase();
  }
  public setPlaying(): void {
    this.state = StateGameE.playing;
  }
  public play(letter: string): void {
    if (this.attempts >= 1 && !this.keyboard.hasBeenUsed(letter)) {
      const shouldSubtractAttempts = !this.word.includes(letter);
      if (shouldSubtractAttempts) {
        this.attempts--;
        this.keyboard.setState(letter, StateLetterE.wrong);
      } else {
        this.keyboard.setState(letter, StateLetterE.right);
      }
      this.updateState();
    }
  }
  private updateState(): void {
    if (this.attempts === 0) {
      this.state = StateGameE.losed;
      return;
    }
    if (this.keyboard.completed(this.word)) {
      this.state = StateGameE.won;
      return;
    }
  }
  public getWord(): string {
    return this.word;
  }
  public getKeyboard(): KeyboardC {
    return this.keyboard;
  }
  public getAttempts(): number {
    return this.attempts;
  }
  public getState(): StateGameE {
    return this.state;
  }
  public getQuestion(): string {
    return words.find((word) => word.word === this.word)?.question ?? "";
  }
  public hasLostAtLeastOneAttempt(): boolean {
    return GameC.ATTEMPTS !== this.attempts;
  }
  public attemptsLost(): number {
    return GameC.ATTEMPTS - this.attempts;
  }
  public attemptsLeft(): number {
    return this.attempts;
  }
  public won(): boolean {
    return this.getState() === StateGameE.won;
  }
  public lost(): boolean {
    return this.getState() === StateGameE.losed;
  }
}
