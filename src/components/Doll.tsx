import React, { useContext } from "react";
import { GameContext } from "../context/GameContext";
import { GameC } from "../types/GameC";

function Doll() {
  const { game } = useContext(GameContext);
  const getDollClassNames = (): string => {
    const common: string = "grid";
    const responsive: string = !game.hasLostAtLeastOneAttempt()
      ? "grid-rows-[auto] grid-cols[auto]"
      : "grid-rows-[minmax(15rem,16rem)] grid-cols-[minmax(8rem,10rem)] justify-center sm:grid-rows-[minmax(20rem,23rem)] sm:grid-cols-[auto]";
    return `${common} ${responsive}`;
  };
  const getWrapperDollComponentClassNames = (): string => {
    const common: string = "flex flex-col h-full w-full gap-2 sm:pl-4";
    const responsive: string = !game.hasLostAtLeastOneAttempt()
      ? ""
      : "justify-between";
    return `${common} ${responsive}`;
  };
  return (
    <div className={getWrapperDollComponentClassNames()}>
      <div className="flex justify-between text-sm w-full sm:pt-2">
        <span className="text-bold font-semibold">Attempts</span>
        <div className="flex gap-4">
          <span>
            <span className="font-semibold">Lost:</span> {game.attemptsLost()}
          </span>
          <span>
            <span className="font-semibold">Left:</span> {game.attemptsLeft()}
          </span>
          <span>
            <span className="font-semibold">Max: </span>
            {GameC.ATTEMPTS}
          </span>
        </div>
      </div>
      <div className={getDollClassNames()}>
        {!game.hasLostAtLeastOneAttempt() ? (
          <span>Good job, you not yet lost any attempt. </span>
        ) : (
          <img
            src={`images/el_ahorcado${game.attemptsLost()}.png`}
            alt=""
            className="w-full h-full"
          />
        )}
      </div>
    </div>
  );
}

export default Doll;
