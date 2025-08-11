import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <nav style={{ padding: '10px', backgroundColor: '#333', color: 'white' }}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ margin: '0 10px' }}><Link to="/" style={{ color: 'white' }}>Home</Link></li>
        <li style={{ margin: '0 10px' }}><Link to="/about" style={{ color: 'white' }}>About</Link></li>
        <li style={{ margin: '0 10px' }}><Link to="/product" style={{ color: 'white' }}>Product</Link></li>
        <li style={{ margin: '0 10px' }}><Link to="/contact" style={{ color: 'white' }}>Contact</Link></li>
        <li style={{ margin: '0 10px' }}><Link to="/cart" style={{ color: 'white' }}>Cart</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default Navbar