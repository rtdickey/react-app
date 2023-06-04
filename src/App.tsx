import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const [clicked, setClicked] = useState(false);
  const onClick = () => {
    setClicked(!clicked);
  };

  return (
    <div>
      {clicked && (
        <Alert color="secondary" dismissible={true}>
          Dismissible Alert 2
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={onClick}
          ></button>
        </Alert>
      )}
      <Button onClick={onClick}>My Button</Button>
    </div>
  );
}

export default App;
