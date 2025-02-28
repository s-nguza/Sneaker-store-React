import React from "react";
import ReactDOM from "react-dom/client";
import SneakerStore from "./App.js";  // Make sure this points to your actual component
import "./App.css"; // Ensure styles are applied

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SneakerStore />
  </React.StrictMode>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
