// src/components/products.jsx
import React, { useEffect, useState } from 'react';

const api = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function ProductCatalog() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${api}/products`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Produkte: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => setError('Produkte konnten nicht geladen werden.'));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Produktliste</h1>
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCatalog;
