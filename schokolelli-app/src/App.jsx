// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Greeting from './components/greetings'; // Ändere hier "Greeting" zu "greetings"
import ProductCatalog from './components/categories';
import Productlist from './components/products';
import Bestellformular from './components/Bestellformular';
import Fotogalerie from './components/Fotogalerie';
import Preisliste from './components/Preisliste';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Greeting />} /> {/* Startseite mit GIF */}
        <Route path="/kategorien" element={<ProductCatalog />} />
        <Route path="/produktliste" element={<Productlist />} />
        <Route path="/fotogalerie" element={<Fotogalerie />} />
        <Route path="/preisliste" element={<Preisliste />} />
        <Route path="/bestellformular" element={<Bestellformular />} />
      </Routes>
    </Router>
  );
}

export default App;
