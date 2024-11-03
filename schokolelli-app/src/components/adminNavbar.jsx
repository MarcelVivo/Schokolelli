// src/components/adminNavbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';

function AdminNavbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><Link to="/admin/customers">Kundenliste</Link></li>
        <li className="navbar-item"><Link to="/admin/products">Produktliste</Link></li>
        <li className="navbar-item"><Link to="/admin/categories">Kategorien</Link></li>
      </ul>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/" className="highlight-button">Kundenansicht</Link>
        </li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
