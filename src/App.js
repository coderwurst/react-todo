import React from 'react';
import './App.css';

import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './actions/index'

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

let mapStateToProps = (state) => {
    return {
        value: state
    }
}

let mapDispatchToProps = {
    onIncrement: incrementCounter,
    onDecrement: decrementCounter
}

let ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
