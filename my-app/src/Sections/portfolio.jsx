import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ImageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bounceClass, setBounceClass] = useState('');

  const handleNext = () => {
    setBounceClass('bounce');
    setTimeout(() => setBounceClass(''), 500);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    setBounceClass('bounce');
    setTimeout(() => setBounceClass(''), 500);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="slider-container">
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className={`arrow-icon left-arrow ${bounceClass}`} 
        onClick={handlePrev} 
      />
      <div className={`image-container ${isAnimating ? 'animating' : ''}`}>
        <a href={images[currentImage].url} target="_blank" rel="noopener noreferrer">
          <img src={images[currentImage].src} alt={`Slide ${currentImage}`} />
        </a>
        <div className="overlay">
          <div className="overlay-text">
            <div className="title">{images[currentImage].title}</div>
            <div className="description">{images[currentImage].description}</div>
          </div>
        </div>
      </div>
      <FontAwesomeIcon 
        icon={faArrowRight} 
        className={`arrow-icon right-arrow ${bounceClass}`} 
        onClick={handleNext} 
      />
    </div>
  );
};

export default ImageSlider;



