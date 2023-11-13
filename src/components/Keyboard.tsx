import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { LetterC } from "../types/LetterC";
import { GameC } from "../types/GameC";
import { cloneDeep } from "lodash";
import Ended from "./Ended";

function Keyboard() {
  const { game, setGame } = useContext(GameContext);
  const play = (letter: string) => {
    setGame((game: GameC) => {
      game.play(letter);
      return cloneDeep(game);
    });
  };
  return (
    <>
      <div className="flex flex-wrap justify-center gap-2">
        {game
          .getKeyboard()
          .getLetters()
          .map((letter: LetterC) => (
            <div
              className="cursor-pointer border-dotted flex justify-center items-center text-base border-2 select-none border-slate-300 w-6 h-6 sm:text-2xl sm:border-4 sm:w-10 sm:h-10"
              style={{
                backgroundColor: letter.getBackgroundColor(),
                color: letter.getColor(),
              }}
              onClick={() => play(letter.getLetter())}
              key={letter.getAscii()}
            >
              {letter.getLetter()}
            </div>
          ))}
      </div>
      <Ended />
    </>
  );
}

export default Keyboard;
