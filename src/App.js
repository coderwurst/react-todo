import React from 'react';
import './App.css';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      todos : [
        "test1",
        "test2",
        "test3"
      ]
    }
  }

  addToList = () => {
    let newToDos = this.state.todos;
    newToDos.push("click");
    this.setState({
      todos : newToDos
    })
  }
  
  render() {
    return (
      <div className="App">
        <h2>TODO Liste</h2>
        <ul>
          {this.state.todos.map((element) => {
            return (
              <li>{element}</li>
            )
          })}
        </ul>
        <input placeholder="whats to be done"></input>
        <button onClick={this.addToList}>add</button>
      </div>
    );
  }

}

export default App;
