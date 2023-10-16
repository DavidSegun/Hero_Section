import React from 'react';
import './navbar.css'

const Navbar = () => {
  const links = [
    { href: '/', label: 'Herox' },
    { href: '/', label: 'Services' },
    { href: '/services', label: 'Portfolio' },
    { href: '/contact-us', label: 'Contact Us' },
    { href: '/portfolio', label: 'About Us' },
  ];

  return (
    <nav className="navbar">
      <h3>Herox</h3>
      
      <ul className="navbar-links">
        
        <div>{links.map((link, index) => (
          
          <li key={index}>
            <a href={link.href}>{link.label}</a>
          </li>
          
        ))}
        </div>
        
        <button className="navbar-button">Register/Login</button>
      </ul>
      
    </nav>
  );
};

export default Navbar;