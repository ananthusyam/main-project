import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import ImageSlider from "./ImageSlider"

export default function App() {
  const [selected, setSelected] = useState("EN")
  const slides = [
    {url:'http://localhost:3000/slider-image.svg', title: 'image-1'},
  ]
  return (
    <div className="App">
      <Dropdown selected={selected} setSelected={setSelected} />
      <ImageSlider slides={slides}/>
    </div>
  );
}


