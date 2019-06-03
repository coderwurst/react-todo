import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import './App.css';
import Panel from './Panel';

class WikiSearchInput extends React.Component {

    constructor(props) {
        super(props);

        this.searchSubmit = this.searchSubmit.bind(this);
        this.inputChange = this.inputChange.bind(this)

        this.state = {
            searchText : "",
            searchButtonClicked: false
        }
    }

    searchSubmit() {
        this.setState({
            searchButtonClicked: true
        })
    }

    inputChange(event) {
        this.setState({
            searchText: event.target.value
        })
    }

    render() {

        return (
            <Panel title="Search Wikipedia">
                { (this.state.searchButtonClicked === true ? (
                <Redirect to={ `/wiki-results/${this.state.searchText}` } />) : null) }
                <input 
                    type="text"
                    onChange={ this.inputChange }
                    value={ this.state.searchText }
                    placeholder="search...">
                </input>
                { 
                    this.state.searchText !== "" 
                                        ? <button 
                                            onClick={ this.searchSubmit }
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
