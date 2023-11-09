import { useState } from "react";
import { GameContext } from "./GameContext";
import { GameC } from "../types/GameC";

export const GameProvider: React.FC<any> = ({ children }) => {
  const [game, setGame] = useState(new GameC());
  
  return (
    <GameContext.Provider value={{ game, setGame }}>
      {children}
    </GameContext.Provider>
  );
};
