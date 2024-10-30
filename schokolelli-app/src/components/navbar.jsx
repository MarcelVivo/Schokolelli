// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/">Willkommen</Link></li>
        <li className="navbar-item"><Link to="/kategorien">Kategorien</Link></li>
        <li className="navbar-item"><Link to="/produktliste">Produktliste</Link></li>
        <li className="navbar-item"><Link to="/fotogalerie">Fotogalerie</Link></li>
        <li className="navbar-item"><Link to="/preisliste">Preisliste</Link></li>
        <li className="navbar-item"><Link to="/bestellformular">Bestellformular</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
