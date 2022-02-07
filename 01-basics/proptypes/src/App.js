import Sum from "./components/Sum";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <Sum a={2} b={4} />
        <Sum a={2} />
        <Sum b={3} />
        <p>Check the console for this one:</p>
        <Sum a={"3"} />
      </div>
    </div>
  );
}
