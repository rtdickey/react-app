import { useState } from "react";

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick = () => {
    const item = cart.items.filter((item) => item.id === 1);

    setCart({
      ...cart,
      items: [
        ...cart.items.map((item) =>
          item.id === 1
            ? {
                id: item.id,
                title: item.title,
                quantity: 2,
              }
            : item
        ),
      ],
    });
  };

  return (
    <div>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>{item.quantity}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
