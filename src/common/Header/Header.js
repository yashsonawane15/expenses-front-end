import React from 'react';
import './Header.css';
import logo from '../images/logo.png';

const Header = () => {

    return (
        <header>
            <img src={logo} alt="App logo" className="logo" />
        </header>
    );
}

export default Header;