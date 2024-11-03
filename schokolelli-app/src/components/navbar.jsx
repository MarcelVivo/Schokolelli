// src/components/navbar.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './navbar.css';

function Navbar() {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {!isAdminPage ? (
          <>
            <li className="navbar-item"><Link to="/">Willkommen</Link></li>
            <li className="navbar-item"><Link to="/bestellformular">Bestellformular</Link></li>
            <li className="navbar-item"><Link to="/fotogalerie">Fotogalerie</Link></li>
            <li className="navbar-item"><Link to="/preisliste">Preisliste</Link></li>
          </>
        ) : (
          <>
            <li className="navbar-item"><Link to="/admin/customers">Kundenliste</Link></li>
            <li className="navbar-item"><Link to="/admin/products">Produktliste</Link></li>
            <li className="navbar-item"><Link to="/admin/categories">Kategorien</Link></li>
          </>
        )}
        <div className="highlight-button-container">
          {!isAdminPage ? (
            <Link to="/admin/customers" className="highlight-button">Admin Bereich</Link>
          ) : (
            <Link to="/" className="highlight-button">Zur Kundenansicht</Link>
          )}
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
