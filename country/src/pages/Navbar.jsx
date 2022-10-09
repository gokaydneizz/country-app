import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon} from '@fortawesome/free-regular-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <div className='navbar'>
        <h1>Where in the world ? </h1>
        <div className='theme-container'>
          <FontAwesomeIcon className='icon' icon={faMoon} />
          <span>Dark Mode</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
