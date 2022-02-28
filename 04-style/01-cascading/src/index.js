import React from "react";
import ReactDOM from "react-dom";
import Movies from "./Movies.jsx";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Movies />
    </div>
  );
}

const rootElement = document.getElementById(
  "root"
);
ReactDOM.render(<App />, rootElement);
