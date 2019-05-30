import React from 'react';
import PropTypes from 'prop-types'; 

import './App.css';
import Panel from './Panel';
import { connect } from 'react-redux'
import { addTodo } from './actions/index'

class TodoList extends React.Component {

    render () {
        return (
            <Panel title="todo List">
                <ul>
                    {this.props.todos.map((element) => {
                    return (
                        <li key={element.id} >{element.title}</li>
                    )
                    })}
                </ul>
                <input></input>
                <button onClick={ () => this.props.addTodo("3. test") } >add todo</button>
            </Panel>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        todos: state.todos
    }
}

let mapDispatchToProps = {
    addTodo: addTodo
}

TodoList.propTypes = {
    todos : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
}

let TodoListContainer = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default TodoListContainer;
