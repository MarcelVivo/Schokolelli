// src/components/Preisliste.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './preisliste.css';

function Preisliste() {
  return (
    <div className="preisliste-container">
      <h2>Preisliste</h2>
      <ul>
        <li>
          <Link to="/bestellformular" className="preisliste-link">
            Dubai Schokolade Tafel 325g - CHF 18.-
          </Link>
        </li>
        <li>
          <Link to="/bestellformular" className="preisliste-link">
            Dubai Schokolade Taler 25g - CHF 5.-
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Preisliste;
