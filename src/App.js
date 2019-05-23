import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: "Earth"
    }

    setTimeout(() => {
      this.setState ({
        name: "Jupiter"
      })
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <h2>Hello {this.state.name}!</h2>
        <p>{this.state.name.length}</p>
      </div>
    );
  }

}

export default App;
