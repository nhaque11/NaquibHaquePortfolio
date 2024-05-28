import React, { useState, useEffect } from 'react';
import styles from './Parallax.module.css';
import About from '../../../assets/hero/about.png'
import Experience from '../../../assets/hero/experience.png'
import Projects from '../../../assets/hero/projects.png'
import Contact from '../../../assets/hero/contact.png'
const images = [
  //'/assets/hero/welcome.png',
  About,
  Experience,
  Projects,
  Contact
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
