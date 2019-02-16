import React from 'react';
import { Zoom } from 'react-slideshow-image';
 
const images = [
    '/img/255.jpg',
    '/img/256.jpg',
    '/img/257.jpg',
    '/img/258.jpg',
    '/img/259.jpg',
    '/img/260.jpg'
];
 
const zoomOutProperties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  scale: 0.4,
  arrows: true
}
 
const Slideshow = () => {
    return (
      <Zoom {...zoomOutProperties}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} alt="institute-img"/>)
        }
      </Zoom>
    )
}
export default Slideshow;