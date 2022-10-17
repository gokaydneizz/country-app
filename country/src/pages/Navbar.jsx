import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-regular-svg-icons';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <Link to='/' className='link'>
          <h1>Where in the world ? </h1>
        </Link>
        <div className='theme-container'>
          <FontAwesomeIcon className='icon' icon={faMoon} />
          <span>Dark Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
