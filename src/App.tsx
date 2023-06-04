import { BsFillCalendarFill } from "react-icons/bs";

function App() {
  let items = ["New York", "Los Angeles", "San Francisco"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <BsFillCalendarFill color="red" size="40" />
    </div>
  );
}

export default App;
