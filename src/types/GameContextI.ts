import React from "react";
import { GameC } from "./GameC";

export interface GameContextI {
  game: GameC;
  setGame: React.Dispatch<React.SetStateAction<GameC>>;
}
