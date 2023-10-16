import React from 'react';
import NavBar from './components/NavBar'
import Header from './components/Header';
import Gallery from './components/Gallery';
import './hero_section.css';
const IndexPage = () => {
  return (
    <div className='Index'>
      <NavBar/>
      <Header />
      <Gallery />
    </div>
  );
};

export default IndexPage;