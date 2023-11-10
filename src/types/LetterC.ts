import { BackgroundColorLetterE } from "./BackgroundColorLetterE";
import { ColorLetterE } from "./ColorLetterE";
import { StateLetterE } from "./StateLetterE";

export class LetterC {
  ascii: number;
  state: StateLetterE;
  constructor(ascii: number) {
    this.ascii = ascii;
    this.state = StateLetterE.started;
  }
  public setState(state: StateLetterE): void {
    this.state = state;
  }
  public getState(): StateLetterE {
    return this.state;
  }
  public getAscii(): number {
    return this.ascii;
  }
  public getLetter(): string {
    return String.fromCharCode(this.ascii);
  }
  public hasBeenUsed(): boolean {
    return this.state !== StateLetterE.started;
  }
  public isRight(): boolean {
    return this.state === StateLetterE.right;
  }
  public getColor(): ColorLetterE {
    return this.hasBeenUsed() ? ColorLetterE.white : ColorLetterE.black;
  }
  public getBackgroundColor(): BackgroundColorLetterE {
    return this.getState() === StateLetterE.started
      ? BackgroundColorLetterE.transparent
      : this.getState() === StateLetterE.right
      ? BackgroundColorLetterE.green
      : BackgroundColorLetterE.red;
  }
}
