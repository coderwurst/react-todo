import React from 'react';
import PropTypes from 'prop-types'; 

import './App.css';
import Panel from './Panel';

class WikiSearchInput extends React.Component {

    constructor(props) {
        super(props);

        this.searchClick = this.searchClick.bind(this);
        this.inputChange = this.inputChange.bind(this)

        this.state = {
            search : ""
        }
    }

    searchClick() {
        this.props.onSearch(this.state.search);
    }

    inputChange(event) {
        this.setState({
            search: event.target.value
        })
    }

    render() {

        return (
            <Panel title="Search Wikipedia">
                <input 
                    type="text"
                    onChange={ this.inputChange }
                    value={ this.state.search }
                    placeholder="search...">
                </input>
                { 
                    this.state.search !== "" 
                                        ? <button 
                                            onClick={ this.searchClick }
                                            >
                                                search
                                            </button>
                                        : null
                 }
            </Panel>
        )
    }
}

WikiSearchInput.propTypes = {
    onSearch : PropTypes.func.isRequired
}

export default WikiSearchInput;
