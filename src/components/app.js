import React from 'react';
import * as d3 from 'd3';

import scoreCardFile from '../mocks/edu-scorecard.csv';

class App extends React.Component {
    state = {
        cards: [],
        query: ''
    };

    async componentDidMount() {
        const response = await d3.csv(scoreCardFile);
        this.setState({
            cards: response
        });
        console.log(this.state.cards);
    }

    render() {    
        return (
            <main className="ui container">
               <h1>Hello Notion!</h1> 
            </main>
        );
    }
};

export default App;

