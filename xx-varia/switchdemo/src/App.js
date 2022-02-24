import logo from './logo.svg';
import './App.css';
import Shape from './components/Shape';
import { useState } from 'react';

const shapes = {
  CIRCLE: 'circle',
  RECT: 'rect',
  ROUNDED_RECT: 'roundrect',
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
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <Shape type={shape} />
      </svg>
    </div>
  );
}

export default App;
