import React from 'react';

import './Panel.css';

class Panel extends React.Component {
    render() {
        return (
            <div className="panel-area">
                <h2 className="panel-title">{this.props.title}</h2>
                <p className="panel-content">{this.props.content}</p>
            </div>
        );
    }
}

export default Panel;
