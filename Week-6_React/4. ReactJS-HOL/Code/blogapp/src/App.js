// src/App.js
import React from 'react';
import Posts from './Posts';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Blog</h1>
        <Posts />
      </header>
    </div>
  );
}

export default App;