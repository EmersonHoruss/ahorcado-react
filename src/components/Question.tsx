import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";

function Question() {
  const { game } = useContext(GameContext);
  return <div className="flex w-full h-full">
    <h2 className="text-lg sm:text-2xl">{game.getQuestion()}:</h2>
  </div>;
}

export default Question;
