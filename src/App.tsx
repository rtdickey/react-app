import ListGroup from "./components/ListGroup";
import "./App.css";

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        heading="Miami"
        items={items}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
