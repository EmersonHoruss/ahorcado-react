import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameC } from "../types/GameC";
import _ from "lodash";

function Start() {
  const { setGame } = useContext(GameContext);
  const start = () => {
    setGame((game: GameC) => {
      game.setPlaying();
      return _.clone(game);
    });
  };
  return (
    <div className="flex flex-col gap-6 items-center">
      <h1 className="text-3xl text-center">Hanged Man Game</h1>
      <img
        src="gifts/hangedman.gif"
        alt="hang man game gif"
        className="w-40 my-4"
      />
      <div className="flex justify-center">
        <button className="border-2 px-8 text-2xl w-auto" onClick={start}>
          Start
        </button>
      </div>
    </div>
  );
}

export default Start;
