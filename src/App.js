import React from 'react';
import './App.css';

class App extends React.Component {
  
  render() {
    return (
      <div className="App">
        <h1>Sandbox</h1>
        <h2>Clicker: { this.props.value }</h2>
        <button onClick={ this.props.onIncrement }>click to add</button>
        <button onClick={ this.props.onDecrement }>click to reduce</button>
      </div>
    );
  }

}

export default App;
