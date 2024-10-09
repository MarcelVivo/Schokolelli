import React, { useEffect, useState } from 'react';

const api = process.env.REACT_APP_API_URL || 'http://localhost:3000';

function Productlist() {
  const [products, setProducts] = useState([]);
  const [editableProductId, setEditableProductId] = useState(null); // Track which product is being edited
  const [editedProduct, setEditedProduct] = useState({}); // Track changes to the edited product

  useEffect(() => {
    fetch(`${api}/products`)
      .then(response => response.json())
      .then(data => {
        const sortedData = sortProducts(data);
        setProducts(sortedData);
      })
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

    // Function to sort products by ProductName
    const sortProducts = (products) => {
      return products.sort((a, b) => a.ProductName.localeCompare(b.ProductName));
    };

  // Handle input change for editing product
  const handleInputChange = (productId, field, value) => {
    setEditedProduct(prev => ({
      ...prev,
      [productId]: {
        ...prev[productId],
        [field]: value,
      },
    }));
  };

  // Handle patch request for product update
  const handleSave = (productId) => {
    const updatedProduct = editedProduct[productId];
    fetch(`${api}/products/${productId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedProduct),
    })
      .then(response => {
        if (response.ok) {
          setProducts(products.map(product =>
            product.ProductID === productId ? { ...product, ...updatedProduct } : product
          ));
          setEditableProductId(null); // Exit edit mode
        }
        else {
          alert('Failed to update product');
        }
      });
  };

  // Handle delete request
  const handleDelete = (productId) => {
    fetch(`${api}/products/${productId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.ok) {
          setProducts(products.filter(product => product.ProductID !== productId));
        }
        else {
          alert('Failed to delete product');
        }
      });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Produktliste</h1>
      
      <button 
        className="btn btn-primary px-4 py-2 mb-4"
        onClick={() => setEditableProductId('new')}
      >
        Neues Produkt hinzufügen
      </button>

      {editableProductId === 'new' && (
        <div className="mb-4 p-4 border rounded">
          <input
            className="border p-2 mb-2 w-full"
            type="text"
            placeholder="Produktname"
            value={editedProduct['new']?.ProductName || ''}
            onChange={(e) => handleInputChange('new', 'ProductName', e.target.value)}
          />
          <input
            className="border p-2 mb-2 w-full"
            type="text"
            placeholder="Einheit"
            value={editedProduct['new']?.Unit || ''}
            onChange={(e) => handleInputChange('new', 'Unit', e.target.value)}
          />
          <input
            className="border p-2 mb-2 w-full"
            type="text"
            placeholder="Preis"
            value={editedProduct['new']?.Price || ''}
            onChange={(e) => handleInputChange('new', 'Price', e.target.value)}
          />
          <div className="flex space-x-2">
            <button
              className="btn btn-secondary px-4 py-2 mb-4"
              onClick={() => {
                const newProduct = editedProduct['new'];
                fetch(`${api}/products`, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(newProduct),
                })
                  .then(response => response.json())
                  .then(data => {
                    setProducts([...products, data]);
                    setEditableProductId(null);
                    setEditedProduct(prev => {
                      const { new: _, ...rest } = prev;
                      return rest;
                    });
                    window.location.reload(); // Refresh the page
                  });
              }}
            >
              Save
            </button>
            <button 
              className="btn btn-secondary px-4 py-2 mb-4 mx-1"
              onClick={() => setEditableProductId(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Produktname</th>
            <th className="py-2 px-4 border-b">Einheit</th>
            <th className="py-2 px-4 border-b">CHF</th>
            <th className="py-2 px-4 border-b">Aktionen</th>
          </tr>
        </thead>
        <tbody>
        {products.map(product => (
            <tr key={product.ProductID} className="hover:bg-gray-100">
              <td className="py-2 px-4 border-b">
                {editableProductId === product.ProductID ? (
                  <input
                    className="border p-2 w-full"
                    type="text"
                    value={editedProduct[product.ProductID]?.ProductName || product.ProductName}
                    onChange={(e) =>
                      handleInputChange(product.ProductID, 'ProductName', e.target.value)
                    }
                  />
                ) : (
                  product.ProductName
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editableProductId === product.ProductID ? (
                  <input
                    className="border p-2 w-full"
                    type="text"
                    value={editedProduct[product.ProductID]?.Unit || product.Unit}
                    onChange={(e) =>
                      handleInputChange(product.ProductID, 'Unit', e.target.value)
                    }
                  />
                ) : (
                  product.Unit
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editableProductId === product.ProductID ? (
                  <input
                    className="border p-2 w-full"
                    type="text"
                    value={editedProduct[product.ProductID]?.Price || product.Price}
                    onChange={(e) =>
                      handleInputChange(product.ProductID, 'Price', e.target.value)
                    }
                  />
                ) : (
                  product.Price
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editableProductId === product.ProductID ? (
                  <div className="flex space-x-2">
                    <button 
                      className="btn btn-secondary px-4 py-2 mb-4 mx-1"
                      onClick={() => handleSave(product.ProductID)}
                    >
                      Save
                    </button>
                    <button 
                      className="btn btn-secondary px-4 py-2 mb-4 mx-1"
                      onClick={() => setEditableProductId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <div className="flex space-x-2">
                    <button 
                      className="btn btn-success px-4 py-2 mb-4 mx-1"
                      onClick={() => setEditableProductId(product.ProductID)}
                    >
                      Edit
                    </button>
                    <button 
                      className="btn btn-danger px-4 py-2 mb-4 mx-1"
                      onClick={() => handleDelete(product.ProductID)}
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

export default Productlist;