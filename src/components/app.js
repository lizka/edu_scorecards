import React from 'react';
import * as d3 from 'd3';

import scoreCardFile from '../mocks/edu-scorecard.csv';

import Cards from './cards/cards';
import Header from './header/header';
import Hero from './hero/hero';
import SearchBar from './search-bar/search-bar';


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

    onSearchSubmit = (query) => {
        // TODO - implement debouncing & unit tests
        this.setState({ query: query });
    }

    render() {    
        return (
            <main className="ui container">
                <Header/>
                <Hero />
                <SearchBar onSubmit={this.onSearchSubmit} />
                <Cards cards={this.state.cards} query={this.state.query}/>
            </main>
        );
    }
};

export default App;
