import { createContext } from "react";
import { GameContextI } from "../types/GameContextI";
import { GameC } from "../types/GameC";

export const GameContext = createContext<GameContextI>({
  game: new GameC(),
  setGame: () => {},
});
