import React from 'react';

import './cards.css';

import ScoreCard from './score-card';

const Cards = props => {
    const word = props.query;
    const cards = props.cards.map((card) => {
        const {CITY, INSTNM, INSTURL, STABBR} = card;
        const engineResults = CITY?.includes(word) || INSTNM?.includes(word) || INSTURL?.includes(word) || STABBR?.includes(word);
        if (!engineResults) {
            return null;
        }

        return <ScoreCard key={card.UNITID} card={card} />;
    });

    return <section className="notion-card__list">{cards}</section>;
};

export default Cards;