// src/components/fotogalerie.jsx
import React from 'react';
import './fotogalerie.css';

const photos = [
  { src: `${process.env.PUBLIC_URL}/img/Schoko1.jpg`, alt: 'Photo 1' },
  { src: `${process.env.PUBLIC_URL}/img/Schoko2.jpg`, alt: 'Photo 2' },
  { src: `${process.env.PUBLIC_URL}/img/Schoko3.jpg`, alt: 'Photo 3' },
  { src: `${process.env.PUBLIC_URL}/img/Schoko4.jpg`, alt: 'Photo 4' },
];

const Fotogalerie = () => {
  return (
    <div className="photo-gallery-container">
      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo.src}
            alt={photo.alt}
            className="gallery-photo"
          />
        ))}
      </div>
    </div>
  );
};

export default Fotogalerie;
