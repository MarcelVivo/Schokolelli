// src/components/greetings.jsx
import React from 'react';
import './greeting.css';

function Greeting() {
  return (
    <div className="greeting-container">
      <img src={`${process.env.PUBLIC_URL}/img/SchokolelliLogo.png`} alt="Schokolelli Logo" className="greeting-logo" />
    </div>
  );
}

export default Greeting;
