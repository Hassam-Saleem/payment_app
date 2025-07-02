import React from 'react';
import './header.css';
import myLogo from '../logoH.PNG'; // adjust path if image is elsewhere

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={myLogo} alt="Logo" className="header-logo" />
        <span className="logo-text">entergy</span>
      </div>
      <nav className="nav">
        <a href="#billing">Billing and payments</a>
        <a href="#outage">Outage</a>
        <a href="#usage">Usage</a>
        <a href="#service">Service request</a>
        <a href="#support">Support</a>
      </nav>
    </header>
  );
};

export default Header;