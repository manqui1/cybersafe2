import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import './ScrollToTopButton.scss'; // Importez le fichier CSS où vous définirez le style du bouton

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button onClick={scrollToTop} className={isVisible ? 'scroll-top-btn show' : 'scroll-top-btn'}>
      <FontAwesomeIcon
        icon={faArrowUp}
        className="arrow-icon"
      />
    </button>
  );
};

export default ScrollToTopButton;
