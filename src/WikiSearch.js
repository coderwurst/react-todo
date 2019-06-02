import React from 'react'

import WikiSearchInput from "./WikiSearchInput"

class WikiSearch extends React.Component {

    searchWiki(input) {
        window.alert(input);
    }

    render() {
        return (
            <div>
                <h1>Wiki Search</h1>
                <WikiSearchInput onSearch={ this.searchWiki }></WikiSearchInput>
            </div>

        )
    }

}

export default WikiSearch;