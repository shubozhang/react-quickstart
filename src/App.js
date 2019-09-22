import React from 'react';
import './css/App.css';

function App() {
  return (
    <div className="App">
        <h1> hi, this is Brylee </h1>
    </div>
  );
  // same as
  // return React.createElement('div', {className: 'App'}, React.createElement('h1', 'null','Using react createElement'));
}

export default App;
