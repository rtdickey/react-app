import Button from "./components/Button";

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Button onClick={() => {}}>My Button</Button>
    </div>
  );
}

export default App;
