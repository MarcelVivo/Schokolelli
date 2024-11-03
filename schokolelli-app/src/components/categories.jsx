// src/components/categories.jsx
import React, { useEffect, useState } from 'react';
import './categories.css'; // Importiere die CSS-Datei für Styling

const api = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function CategoryList() {
  const [categories, setCategories] = useState([]);
  const [editableCategoryId, setEditableCategoryId] = useState(null);
  const [editedCategory, setEditedCategory] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${api}/categories`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Fehler beim Laden der Kategorien: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        const sortedData = data.sort((a, b) => a.CategoryName.localeCompare(b.CategoryName));
        setCategories(sortedData);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setError('Kategorien konnten nicht geladen werden.');
      });
  }, []);

  const handleInputChange = (categoryId, field, value) => {
    setEditedCategory(prev => ({
      ...prev,
      [categoryId]: {
        ...prev[categoryId],
        [field]: value,
      },
    }));
  };

  const handleSave = (categoryId) => {
    const updatedCategory = editedCategory[categoryId];
    fetch(`${api}/categories/${categoryId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedCategory),
    })
      .then(response => {
        if (response.ok) {
          setCategories(categories.map(category =>
            category.CategoryID === categoryId ? { ...category, ...updatedCategory } : category
          ));
          setEditableCategoryId(null);
        } else {
          alert('Failed to update category');
        }
      })
      .catch(error => console.error('Error updating category:', error));
  };

  const handleDelete = (categoryId) => {
    fetch(`${api}/categories/${categoryId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setCategories(categories.filter(category => category.CategoryID !== categoryId));
        } else {
          alert('Failed to delete category');
        }
      })
      .catch(error => console.error('Error deleting category:', error));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Kategorienliste</h1>

      {error && <p className="text-red-500">{error}</p>}

      <button
        className="btn btn-primary px-4 py-2 mb-4"
        onClick={() => setEditableCategoryId('new')}
      >
        Neue Kategorie hinzufügen
      </button>
      {editableCategoryId === 'new' && (
        <div className="mb-4 p-4 border rounded">
          <input
            className="border p-2 mb-2 w-full"
            type="text"
            placeholder="Name der Kategorie"
            value={editedCategory['new']?.CategoryName || ''}
            onChange={(e) => handleInputChange('new', 'CategoryName', e.target.value)}
          />
          <div className="flex space-x-2">
            <button
              className="btn btn-secondary px-4 py-2 mb-4"
              onClick={() => {
                const newCategory = editedCategory['new'];
                fetch(`${api}/categories`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(newCategory),
                })
                  .then(response => response.json())
                  .then(data => {
                    setCategories([...categories, data]);
                    setEditableCategoryId(null);
                    setEditedCategory(prev => {
                      const { new: _, ...rest } = prev;
                      return rest;
                    });
                  })
                  .catch(error => console.error('Error adding new category:', error));
              }}
            >
              Save
            </button>
            <button
              className="btn btn-secondary px-4 py-2 mb-4 mx-1"
              onClick={() => setEditableCategoryId(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name der Kategorie</th>
            <th className="py-2 px-4 border-b">Aktionen</th>
          </tr>
        </thead>
        <tbody>
          {categories.map(category => (
            <tr key={category.CategoryID} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                {editableCategoryId === category.CategoryID ? (
                  <input
                    className="border p-2 w-full"
                    type="text"
                    value={editedCategory[category.CategoryID]?.CategoryName || category.CategoryName}
                    onChange={(e) =>
                      handleInputChange(category.CategoryID, 'CategoryName', e.target.value)
                    }
                  />
                ) : (
                  category.CategoryName
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editableCategoryId === category.CategoryID ? (
                  <div className="flex space-x-2">
                    <button
                      className="btn btn-secondary px-4 py-2 mb-4 mx-1"
                      onClick={() => handleSave(category.CategoryID)}
                    >
                      Save
                    </button>
                    <button
                      className="btn btn-secondary px-4 py-2 mb-4 mx-1"
                      onClick={() => setEditableCategoryId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <button
                      className="btn btn-success px-4 py-2 mb-4 mx-1"
                      onClick={() => setEditableCategoryId(category.CategoryID)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger px-4 py-2 mb-4 mx-1"
                      onClick={() => handleDelete(category.CategoryID)}
                    >
                      Delete
                    </button>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryList;