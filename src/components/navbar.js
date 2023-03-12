import React from 'react';
import { Link } from 'react-router-dom';
import './styles/navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/signin">Sign In</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/search">Search</Link></li>
        
        
      </ul>
    </nav>
  );
}

export default Navbar;
