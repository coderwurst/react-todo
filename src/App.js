import React from 'react';
import './App.css';
import TodoList from './TodoList';
import TodoAdd from './TodoAdd';

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

  addToList = (title) =>  {
    let newToDos = this.state.todos;
    newToDos.push({id: newToDos.length + 1, title: title});
    this.setState({
      todos : newToDos
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>Sandbox</h1>
        <TodoList list={ this.state.todos } ></TodoList>
        <TodoAdd onAdd={ this.addToList } ></TodoAdd>
      </div>
    );
  }

}

export default App;
