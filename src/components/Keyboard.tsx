import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { LetterC } from "../types/LetterC";
import { StateGameE } from "../types/StateGameE";
import { GameC } from "../types/GameC";
import { clone } from "lodash";

function Keyboard() {
  const { game, setGame } = useContext(GameContext);
  const play = (letter: string) => {
    setGame((game: GameC) => {
      game.play(letter);
      if (game.getState() === StateGameE.won) {
        console.log("you won");
      }
      if (game.getState() === StateGameE.losed) {
        console.log("you lost");
      }
      return clone(game);
    });
    // show popup("Upps you lost", <button>Home<button> <button>play again</button>)
  };
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {game
        .getKeyboard()
        .getLetters()
        .map((letter: LetterC) => (
          <div
            className="cursor-pointer border-dotted flex justify-center items-center text-base border-2 border-slate-300 w-6 h-6 sm:text-2xl sm:border-4 sm:w-10 sm:h-10"
            style={{
              backgroundColor: letter.getBackgroundColor().toString(),
              color: letter.getColor().toString(),
            }}
            onClick={() => play(letter.getLetter())}
            key={letter.getAscii()}
          >
            {letter.getLetter()}
          </div>
        ))}
    </div>
  );
}

export default Keyboard;
