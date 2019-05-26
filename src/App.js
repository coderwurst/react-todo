import React from 'react';
import './App.css';
import TodoList from './TodoList';

class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      todos : [
        { id: 1, title: "test1"},
        { id: 2, title: "test2"},
        { id: 3, title: "test3"}
      ]
    }
  }

  addToList = () => {
    let newToDos = this.state.todos;
    newToDos.push({id: newToDos.length + 1, title: "click"});
    this.setState({
      todos : newToDos
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sandbox</h1>
        <TodoList list={this.state.todos} ></TodoList>
        <input placeholder="whats to be done"></input>
        <button onClick={this.addToList}>add</button>
      </div>
    );
  }

}

export default App;
