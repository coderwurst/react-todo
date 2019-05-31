import React from 'react';

import { Link } from 'react-router-dom'

class Navigation extends React.Component {

    render() {
        return (
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/todo">TODO</Link></li>
                <li><Link to="/clicker">CLICKER</Link></li>
            </ul>

        )
    }

}

export default Navigation;