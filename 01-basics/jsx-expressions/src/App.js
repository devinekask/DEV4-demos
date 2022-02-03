import "./styles.css";

const getName = () => <strong>Jantje</strong>;

export default function App() {
  const name = "James";
  const anonymous = true;
  const active = false;

  return (
    <div>
      <p>I'm James</p>
      <p>I'm  {name}</p>
      <p>I'm  {anonymous ? "anonymous" : name}</p>
      <p>I'm  {getName()}</p>
      <button disabled={!active}>Click me</button>
    </div>
  );
}
