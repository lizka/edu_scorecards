import React from 'react';

import './header.css';

class Header extends React.Component {
    render() {
        return (
            <header className="notion__header">
                <h1 className="notion__logo">YourUni</h1>
                <ul className="notion__navigation" role="navigation">
                    <li className="active">Product</li>
                    <li>Download</li>
                    <li>Pricing</li>
                </ul>
            </header>
        );
    }
}

export default Header;