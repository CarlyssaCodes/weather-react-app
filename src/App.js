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
      <p>
        This project was coded by Carlyssa Pierre, and it is{" "}
        <a href="https://github.com/CarlyssaCodes/weather-react-app">
          open-sourced
        </a>
      </p>
    </div>
  );
}
