// src/app.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Bestellformular from './components/bestellformular';
import Fotogalerie from './components/fotogalerie';
import Preisliste from './components/preisliste';
import Customers from './components/customers'; 
import ProductCatalog from './components/products'; 
import CategoryList from './components/categories'; // Import für die Kategorie-Liste
import './app.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/customers" element={<Customers />} />
          <Route path="/bestellformular" element={<Bestellformular />} />
          <Route path="/fotogalerie" element={<Fotogalerie />} />
          <Route path="/preisliste" element={<Preisliste />} />
          <Route path="/product-catalog" element={<ProductCatalog />} />
          <Route path="/categories" element={<CategoryList />} /> {/* Neue Route für CategoryList */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
