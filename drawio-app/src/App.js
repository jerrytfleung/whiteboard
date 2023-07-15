import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import Canvas from './features/canvas/Canvas'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Canvas />
      </header>
    </div>
  );
}

export default App;
