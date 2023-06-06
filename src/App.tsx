import { useState } from "react";
import Like from "./components/Like";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Franciso",
      zipCode: 94111,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
