import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import './ParagraphSections.css';

const ParagraphSections = ({ sections }) => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [bounceClass, setBounceClass] = useState('');

  const handleNext = () => {
    setBounceClass('bounce');
    setTimeout(() => setBounceClass(''), 500);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSection((prev) => (prev + 1) % sections.length);
      setIsAnimating(false);
    }, 500);
  };

  const handlePrev = () => {
    setBounceClass('bounce');
    setTimeout(() => setBounceClass(''), 500);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentSection((prev) => (prev - 1 + sections.length) % sections.length);
      setIsAnimating(false);
    }, 500);
  };

  return (
    <div className="paragraph-container">
      <FontAwesomeIcon 
        icon={faArrowLeft} 
        className={`arrow-icon left-arrow ${bounceClass}`} 
        onClick={handlePrev} 
      />
      <div className={`paragraph-content ${isAnimating ? 'animating' : ''}`}>
        {sections[currentSection]}
      </div>
      <FontAwesomeIcon 
        icon={faArrowRight} 
        className={`arrow-icon right-arrow ${bounceClass}`} 
        onClick={handleNext} 
      />
    </div>
  );
};

export default ParagraphSections;


