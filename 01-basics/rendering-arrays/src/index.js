import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  const list = ["Eat", "Sleep", "Work", "Repeat"];
  const plist = [<p>Eat</p>, <p>Sleep</p>, <p>Work</p>, <p>Repeat</p>];
  return (
    <div>
      <p>Check console: errors</p>
      {list}
      {plist}
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);