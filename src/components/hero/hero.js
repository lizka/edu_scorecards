import React from 'react';

import './hero.css';
import prince from './prince.svg';

class Hero extends React.Component {
    render() {
        return (
            <section class="notion-media">
                <section class="notion-media__container">
                    <section className="notion-media__body">
                        <h1 className="primary-text__header">Find the university that’s right for you.</h1>
                        <h2 className="secondary-text__header">Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</h2>
                    </section>
                    <aside>
                        <img src={prince} className="notion-media__img" alt="The Little Prince" />
                    </aside>
                </section>
            </section>
        );
    }
}

export default Hero;