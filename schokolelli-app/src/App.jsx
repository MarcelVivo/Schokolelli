// src/app.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar';
import Bestellformular from './components/bestellformular';
import Fotogalerie from './components/fotogalerie';
import Preisliste from './components/preisliste';
import Customers from './components/customers';
import CategoryList from './components/categories';
import Greeting from './components/greetings';
import './app.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Greeting />} /> {/* Standard-Homepage */}
          <Route path="/categories" element={<CategoryList />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/preisliste" element={<Preisliste />} />
          <Route path="/bestellformular" element={<Bestellformular />} />
          <Route path="/fotogalerie" element={<Fotogalerie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
