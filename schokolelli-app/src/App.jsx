// src/app.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Bestellformular from './components/bestellformular';
import Fotogalerie from './components/fotogalerie';
import Preisliste from './components/preisliste';
import Customers from './components/customers';
import CategoryList from './components/categories';
import ProductList from './components/products';
import Greeting from './components/greetings';
import './app.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Kundenansicht */}
          <Route path="/" element={<Greeting />} />
          <Route path="/bestellformular" element={<Bestellformular />} />
          <Route path="/fotogalerie" element={<Fotogalerie />} />
          <Route path="/preisliste" element={<Preisliste />} />

          {/* Admin Bereich */}
          <Route path="/admin/customers" element={<Customers />} />
          <Route path="/admin/products" element={<ProductList />} />
          <Route path="/admin/categories" element={<CategoryList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;