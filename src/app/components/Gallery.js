import React from 'react';
import './gallery.css';
import Image from'next/image';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';


const Gallery = () => {
  const images = [
    image1,
    image2,
    image3
  ];

  return (
    <div className="galleries">
      {images.map((image, index) => (
       <div className='gallery'><Image key={index} src={image} alt={`Image ${index + 1}`} width={400} height={400} layout='responsive'/>
       <a>Send invoices &#x2192; </a>
       </div>
      ))}
      
    </div>
  );
};

export default Gallery;