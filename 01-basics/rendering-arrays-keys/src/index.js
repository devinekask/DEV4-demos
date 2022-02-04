import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const plist = [
    <p key="a">Eat</p>,
    <p key="b">Sleep</p>,
    <p key="c">Work</p>,
    <p key="d">Repeat</p>
  ];
  return (
    <div>
      <p>No errors here</p>
      {plist}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);