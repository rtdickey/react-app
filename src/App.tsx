import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Ryan" } });
  };

  return (
    <div>
      {game.player.name} <button onClick={handleClick}>Change Name</button>
    </div>
  );
}

export default App;
