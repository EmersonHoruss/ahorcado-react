import "./App.css";
import { GameProvider } from "./context/GameProvider";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <GameProvider>
        <Main />
      </GameProvider>
    </>
  );
}

export default App;
