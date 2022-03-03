import logo from './logo.svg';
import './App.css';
import Shape from './components/Shape';
import { useState } from 'react';
import ShapeWithObject from './components/ShapeWithObject';

const shapes = {
  CIRCLE: 'Circle(1)',
  RECT: 'Rect(2)',
  ROUNDED_RECT: 'RoundRect(3)',
}
export { shapes };

function App() {
  const [shape, setShape] = useState();

  return (
    <div className="App">
      <select value={shape} onChange={(e) => setShape(e.target.value)}>
        <option value="">--Kies een vorm--</option>
        {Object.keys(shapes).map(key => <option key={key} value={shapes[key]}>{shapes[key]}</option>)}
      </select>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
        <ShapeWithObject type={shape} />
      </svg>
    </div>
  );
}

export default App;
