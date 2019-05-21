import React from 'react';
import './App.css';

import Panel from './Panel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Panel Example</h1>
      </header>
      <br/>
      <Panel title="Überschrift" content="Test123" />
      <br/>
      <Panel title="Noch eine Überschrift" content="Test456" />
    </div>
  );
}

export default App;
