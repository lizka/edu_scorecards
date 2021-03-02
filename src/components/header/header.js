import React from 'react';

import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="notion-header">
                <h1 className="notion-logo__text">YourUni</h1>
                <ul className="notion-navigation" role="navigation">
                    <li className="active">Product</li>
                    <li>Download</li>
                    <li>Pricing</li>
                </ul>
            </header>
        );
    }
}

export default Header;