import React from 'react';
import PropTypes from 'prop-types'; 

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

TodoList.propTypes = {
    list : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired
        })
    ).isRequired
}

export default TodoList;