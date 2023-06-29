import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

const connect = () => console.log("Connecting");

const disconnect = () => console.log("Disconnecting");

function App() {
  useEffect(() => {
    connect();

    //Clean up function
    return () => disconnect();
  });
  return <div></div>;
}

export default App;
