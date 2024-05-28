import React, { useState, useEffect } from 'react';
import styles from './Parallax.module.css';

const images = [
  //'/assets/hero/welcome.png',
  '/assets/hero/about.png',
  '/assets/hero/experience.png',
  '/assets/hero/projects.png',
  '/assets/hero/contact.png',
];

const Parallax = () => {
  const [imageIndex, setImageIndex] = useState(0);

  const handleScroll = () => {
    // Determine the new image index based on the scroll position
    const newIndex = Math.floor(window.scrollY / 1600) % images.length;  // Adjust '500' to change more or less frequently
    setImageIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={styles.parallax} 
      style={{ backgroundImage: `url(${images[imageIndex]})` }}
    ></div>
  );
}

export default Parallax;
