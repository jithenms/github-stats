import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*
  Component which is rendered by React
  Renders App component which contains everything needed

*/

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");
// Everything inside here is managed by React DOM
// Reacts implementation of DOM takes care of updating DOM to match elements
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
