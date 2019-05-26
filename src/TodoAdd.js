import React from 'react';
import './App.css';
import Panel from './Panel';

class TodoAdd extends React.Component {

    constructor(props) {
        super(props);

        this.onTodoAdd = this.onTodoAdd.bind(this);
        this.inputChange = this.inputChange.bind(this)

        this.state = {
            newTodo : ""
        }
    }

    onTodoAdd() {
        this.props.onAdd(this.state.newTodo);
    }

    inputChange(event) {
        this.setState({
            newTodo: event.target.value
        })
    }

    render() {
        return (
            <Panel title="Add new item">
                <input 
                    type="text"
                    onChange={ this.inputChange }
                    value={ this.state.newTodo }
                    placeholder="whats to be done">
                </input>
                <button onClick={ this.onTodoAdd }>add</button>
            </Panel>
        )
    }

}

export default TodoAdd;
