import { useState } from "react";
import Navbar from "./components/Navbar";
import FlowerDisplay from "./components/FlowerDisplay";
import "./App.css";

function App() {
  const [selectedFlower, setSelectedFlower] = useState("rose");

  return (
    <div className="app">
      <Navbar setSelectedFlower={setSelectedFlower} />
      <FlowerDisplay flower={selectedFlower} />
    </div>
  );
}

export default App;