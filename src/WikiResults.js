import React from 'react';

import Panel from './Panel';

import { wikiSearch } from './actions/index';

import { connect } from 'react-redux'

class WikiResults extends React.Component {

    componentDidMount() {
        this.props.onPerformSearch(this.props.match.params.search);
    }
    
    render() {
        return(
            <div>
                <div>WikiResults: { this.props.match.params.search }</div>
                { (this.props.response ? (
                    <div>
                        { this.props.response.body.query.search.map((currentElement, currentIndex) => {
                            return (
                                <Panel key={ currentIndex } title={currentElement.title}>
                                    <div dangerouslySetInnerHTML={{__html:currentElement.snippet}}></div>
                                </Panel>
                            )
                        }) }
                    </div>
                ): null) }
            </div>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        response: state.wikipedia
    }
}

let mapDispatchToProps = {
    onPerformSearch: wikiSearch
}

let ConnectedResults = connect(mapStateToProps, mapDispatchToProps)(WikiResults);

export default ConnectedResults;
