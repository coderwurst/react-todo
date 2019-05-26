import React from 'react';
import './App.css';
import Panel from './Panel';

class TodoList extends React.Component {

    render () {
        return (
            <Panel title="todo List">
            <ul>
                {this.props.list.map((element) => {
                return (
                    <li key={element.id} >{element.title}</li>
                )
                })}
            </ul>
            </Panel>
        )
    }
}

export default TodoList;