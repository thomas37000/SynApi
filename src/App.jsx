import React from 'react';
import Routter from './components/router/Router';
import './App.css';

require('dotenv').config();

function App() {
  return (
    <div className="App">
      <Routter />
    </div>
  );
}

export default App;
