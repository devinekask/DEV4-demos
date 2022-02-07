import Hello from "./components/Hello";
import Nested from "./components/Nested";
import OtherOne from "./components/OtherOne";


export default function App() {
  return (
    <div>
      <h1>Hello components</h1>
      <Hello />
      <Nested />
      <OtherOne />
    </div>
  );
}
