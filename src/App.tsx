import Alert from "./components/Alert";
import MyButton from "./components/MyButton";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  const handleButtonClick = () => {
    console.log("My button was successful");
  };

  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <MyButton name="My Button Practice" onButtonClick={handleButtonClick} />
    </div>
  );
}

export default App;
