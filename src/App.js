import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      steps: 0
    }
  }

  updateState = () => {
    this.setState({
      steps: this.state.steps + 1 
    })
  }
  
  render() {
    return (
      <div className="App">
        <h2>Worlds best Pedometer</h2>
        <p>You have reached: {this.state.steps} steps!</p>
        <button onClick={this.updateState} >step</button>
      </div>
    );
  }

}

export default App;
