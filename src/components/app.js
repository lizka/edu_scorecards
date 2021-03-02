import React from 'react';
import * as d3 from 'd3';

import scoreCardFile from '../mocks/edu-scorecard.csv';

import Header from './header/header';
import Hero from './hero/hero';
import Cards from './cards/cards';

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
    }

    render() {    
        return (
            <main className="ui container">
                <Header/>
                <Hero />
                <Cards cards={this.state.cards} query={this.state.query}/>
            </main>
        );
    }
};

export default App;
