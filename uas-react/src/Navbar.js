import {Link} from 'react-router-dom';
import React from 'react';
import logo from './images/logo_transparent.png';

const Navbar = () => {
  return (  
    <nav className="navbar">
      <img src={logo} alt="XYZ News Logo"/>
      <div className="link">
        <Link to="/">News Lists</Link>
      </div>
    </nav>
  );
}
export default Navbar;