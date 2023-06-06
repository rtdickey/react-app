import { useState } from "react";
import Like from "./components/Like";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  const [isLoading, setLoading] = useState(false);

  return <div></div>;
}

export default App;
