import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Happy Helpings</h1>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/specials">Specials</Link>
        <Link to="/about">About</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}

export default Header;
