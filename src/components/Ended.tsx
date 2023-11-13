import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../context/GameContext";
import { cloneDeep } from "lodash";
import { GameC } from "../types/GameC";
import Modal from "./Modal";
import Confetti from "./Confetti";

const Ended: React.FC<any> = () => {
  const { game, setGame } = useContext(GameContext);
  const [fire, setFire] = useState<any>(null);
  const playAgain = () => {
    setGame(() => {
      const game = new GameC();
      game.setPlaying();
      return cloneDeep(game);
    });
  };
  const exit = () => {
    setGame(() => {
      const game = new GameC();
      return cloneDeep(game);
    });
  };
  useEffect(() => {
    if (game.won()) {
      setFire({ ...game });
    }
  }, [game]);
  return (
    <>
      {(game.won() || game.lost()) && (
        <>
          <Modal
            title={
              game.won()
                ? "Congrats!!! you're the best, You won!!! :D"
                : "Game Over :("
            }
            buttonLeftText="Exit"
            buttonLeftHandle={exit}
            buttonRightText="Play Again"
            buttonRightHandle={playAgain}
          />
          <Confetti fire={fire} />
        </>
      )}
    </>
  );
};

export default Ended;
