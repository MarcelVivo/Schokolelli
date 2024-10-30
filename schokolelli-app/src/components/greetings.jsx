// src/components/greetings.jsx
import React from 'react';
import './greeting.css';

function Greeting() {
  return (
    <div className="greeting-container">
      <img src="/img/SchokolelliLogo.png" alt="Willkommens-GIF" className="greeting-gif" />
    </div>
  );
}

export default Greeting;
