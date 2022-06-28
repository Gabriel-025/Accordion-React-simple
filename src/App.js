import React from "react";
import { Accordion } from "./components/AccorFaq";
import items from "./components/AccorFaq/data";

export default function App() {
  return (
    <div className="App">
      <Accordion items={items} />
    </div>
  );
}
