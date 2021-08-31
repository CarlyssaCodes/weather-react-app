import React from "react";
import Form from "./Form";
import City from "./City";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div>
      <div className="App">
        <Form />
        <City />
        <Weather />
      </div>
      <p>Open-source coded by Carlyssa Pierre</p>
    </div>
  );
}
