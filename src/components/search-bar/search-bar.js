import React from 'react';

import './search-bar.css';

class SearchBar extends React.Component {
    state = { query: '' }

    onFormChange = event => {
        event.preventDefault();

        this.props.onSubmit(this.state.query);
    }

    render() {
        return (
            <form className="notion-search-bar__container" onChange={this.onFormChange} onSubmit={this.onFormChange}>
                <input className="notion-search-bar" type="text" value={this.state.query} placeholder="Search..." onChange={(e) => this.setState({ query: e.target.value }) } />
            </form>
        );
    }
}

export default SearchBar;