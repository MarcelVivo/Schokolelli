// src/components/categories.jsx
import React, { useEffect, useState } from 'react';

const api = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${api}/categories`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Kategorien: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => setCategories(data))
      .catch(error => setError('Kategorien konnten nicht geladen werden.'));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Kategorien</h1>
      <ul>
        {categories.map(category => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CategoryList;
