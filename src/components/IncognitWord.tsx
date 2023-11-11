import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

function IncognitWord() {
  const { game } = useContext(GameContext);
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {game
        .getWord()
        .split("")
        .map((letter: string, index: number) => (
          <div
            key={index}
            className="w-6 h-6 border-b-2 border-slate-300 text-center text-base sm:w-8 sm:h-8 sm:border-b-4"
          >
            <span className="w-full h-full text-2xl" >
              {game.getKeyboard().hasBeenUsed(letter) && letter}
            </span>
          </div>
        ))}
    </div>
  );
}

export default IncognitWord;
