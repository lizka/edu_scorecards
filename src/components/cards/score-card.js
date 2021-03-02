import React from 'react';

import './cards.css';

class ScoreCard extends React.Component {
    render() {
        const {CITY, INSTNM, INSTURL, STABBR} = this.props.card;
        return (
            <article className="notion-card">
                <p className="university-location">{STABBR} · {CITY}</p>
                <p className="university-name">{INSTNM}</p>
                <p className="university-url">{INSTURL}</p>
            </article>
        );
    }
}

export default ScoreCard;