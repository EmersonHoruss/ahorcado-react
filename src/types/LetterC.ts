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
}
