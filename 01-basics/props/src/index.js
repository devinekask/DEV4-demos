import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => (
  <p>
    Hello from {props.planet}, {props.distance} million km away!
  </p>
);

const App = () => {
  return (
    <div>
      <Hello planet="Venus" distance={170} />
      <Hello planet="Earth" distance={0} />
      <Hello planet="Mars" distance={253} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector(`#root`));
