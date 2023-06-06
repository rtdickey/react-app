import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "olives"] });
  };

  return (
    <div>
      <p>
        {pizza.name} with{" "}
        {pizza.toppings.map((item) => (
          <span key={item}>{" and " + item}</span>
        ))}
      </p>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
