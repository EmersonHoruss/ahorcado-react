import IncognitWord from "../components/IncognitWord";
import Question from "../components/Question";
import Keyboard from "../components/Keyboard";
import Doll from "../components/Doll";

function Game() {
  return (
    <div className="flex flex-col items-center gap-4 max-h-screen p-2 max-w-sm min-h-[440px] sm:max-w-none sm:grid sm:grid-rows-[auto_auto_auto] sm:grid-cols-2 sm:gap-6 sm:px-[5%] md:px-[10%] lg:px-[20%] xl:px-[25%]">
      <Question />
      <div className="w-full h-full flex flex-col gap-2 items-center sm:row-span-3 sm:col-span-1 sm:flex sm:justify-center sm:items-center">
        <Doll />
      </div>
      <IncognitWord />
      <Keyboard />
    </div>
  );
}

export default Game;
