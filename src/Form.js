import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="form">
      <input type="search" placeholder="Search City" autofocus="on" />
      <input type="submit" value="Search" />
    </div>
  );
}
