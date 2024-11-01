// src/components/navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Willkommen</Link></li>
        <li className="navbar-item"><Link to="/categories">Kategorien</Link></li>
        <li className="navbar-item"><Link to="/products">Produktliste</Link></li>
        <li className="navbar-item"><Link to="/customers">Kundenliste</Link></li>
        <li className="navbar-item"><Link to="/preisliste">Preisliste</Link></li>
        <li className="navbar-item"><Link to="/bestellformular">Bestellformular</Link></li>
        <li className="navbar-item"><Link to="/fotogalerie">Fotogalerie</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
