// src/components/categories.jsx
import React, { useEffect, useState } from 'react';
import './categories.css';

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
      .then(data => {
        console.log('Geladene Kategorien:', data);
        if (data && data.length > 0) {
          setCategories(data.sort((a, b) => a.CategoryName.localeCompare(b.CategoryName)));
        } else {
          setError('Keine Kategorien gefunden.');
        }
      })
      .catch(error => {
        console.error('Fehler beim Laden der Kategorien:', error);
        setError('Kategorien konnten nicht geladen werden.');
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Kategorien</h1>
      {error && <p className="error">{error}</p>}
      {categories.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Category Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {categories.map(category => (
              <tr key={category.CategoryID}>
                <td>{category.CategoryName}</td>
                <td>{category.Description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        !error && <p>Lade Kategorien...</p>
      )}
    </div>
  );
}

export default CategoryList;
