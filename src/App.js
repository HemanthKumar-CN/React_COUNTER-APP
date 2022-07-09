import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './Component/Button';

function App() {
  const [count, setCount] = useState(0)

  const handleAdd =()=>{
    setCount(prev => prev + 1)
  }
  const handleReduce =()=>{
    setCount(prev => prev - 1)
  }

  return (
    <div className="App">
        <h1>Count:</h1>
          <div data-testid='counter'>{count}</div>
        Learn react
        <Button label='ADD' onClick={handleAdd} ></Button>
        <Button label='REDUCE' onClick={handleReduce} ></Button>
    </div>
  );
}

export default App;
