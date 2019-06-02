import React from 'react';

import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class Navigation extends React.Component {

    render() {
        return (
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/todo">TODO ({ this.props.todoCount })</Link></li>
                <li><Link to="/clicker">CLICKER ({ this.props.counter })</Link></li>
                <li><Link to="/wiki">WIKI SEARCH</Link></li>
            </ul>

        )
    }
}

// retrieve values from state
let mapStateToProps = (state) => {
    return {
        counter: state.counter,
        todoCount: state.todos.length
    }
}

let mapDispatchToProps = { }

let ConnectedNav = connect(mapStateToProps, mapDispatchToProps)(Navigation);

export default ConnectedNav;