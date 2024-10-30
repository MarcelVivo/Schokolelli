import React, { useState } from 'react'
import "./bestellformular.css"

const Bestellformular = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    product: '',
    quantity: 1,
  })

  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validierung für spezifische Felder hinzufügen
    if (formData.quantity < 1) {
      setError('Die Menge muss mindestens 1 sein.')
      return
    }

    setError('') // Setzt die Fehlermeldung zurück
    console.log('Bestellung abgeschickt:', formData)
    setSubmitted(true) // Setzt die Bestätigung auf "Abgesendet"

    // Hier können Sie z.B. eine API-Anfrage für das Absenden der Daten verwenden
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="order-form">
        <div>
          <label htmlFor="firstname">Vorname:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Nachname:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="address">Adresse:</label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="product">Produkt:</label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            required
          >
            <option value="">Wählen Sie ein Produkt</option>
            <option value="Dubai Schokolade Tafel 325g - CHF 18.-">Dubai Schokolade Tafel 325g</option>
            <option value="Dubai Schokolade Taler 25g - CHF 5.-">Dubai Schokolade Taler 25g</option>
          </select>
        </div>
        <div>
          <label htmlFor="quantity">Menge:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Bestellen</button>
      </form>
      
      {submitted && <p className="success-message">Bestellung erfolgreich abgeschickt!</p>}
    </div>
  )
}

export default Bestellformular
