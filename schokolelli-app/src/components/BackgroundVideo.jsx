// src/components/BackgroundVideo.jsx
import React from 'react';
import './BackgroundVideo.css'; // Großbuchstabe, um mit dem tatsächlichen Dateinamen übereinzustimmen

function BackgroundVideo() {
  return (
    <div className="background-video-container">
      <video autoPlay loop muted className="background-video">
        <source src="/img/SchokoAnimFinal.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Herzlich Willkommen bei Schokolelli</h1>
        <p>Genießen Sie die besten handgemachten Schokoladen</p>
      </div>
    </div>
  );
}

export default BackgroundVideo;
