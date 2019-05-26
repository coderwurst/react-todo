import React from 'react';
import PropTypes from 'prop-types'; 

import './Panel.css';

class Panel extends React.Component {
    render() {
        return (
            <div className="panel-area">
                <h2 className="panel-title">{this.props.title}</h2>
                <p className="panel-content">{this.props.children}</p>
            </div>
        );
    }
}

Panel.propTypes = {
    title: PropTypes.string.isRequired
}

export default Panel;
