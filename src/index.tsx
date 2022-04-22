import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

/*
  Component which is rendered by React
  Renders App component which contains everything needed
*/

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find the root element");

/* 
  React takes care of updating the real DOM by maintaining a virtual DOM which aims
  to keep the real DOM in sync by applying diffs and changes defined in Javascript
  to the root element of the HTML.
*/

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
