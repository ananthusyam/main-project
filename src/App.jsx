import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";


export default function App() {
  const [selected, setSelected] = useState("EN")
  return (
    <div className="App">
      <Dropdown selected={selected} setSelected={setSelected} />
    </div>
  );
}


