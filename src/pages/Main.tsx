import React, { useContext } from "react";
import Game from "./Game";
import Start from "./Start";
import { GameContext } from "../context/GameContext";
import { StateGameE } from "../types/StateGameE";

function Main() {
  const { game } = useContext(GameContext);
  return (
    <div className="flex justify-center items-center w-full h-screen">
      {game.getState() === StateGameE.started ? <Start /> : <Game />}
    </div>
  );
}

export default Main;
