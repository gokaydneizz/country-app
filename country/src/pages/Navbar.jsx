import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const Navbar = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  return (
    <nav className={theme == 'light' ? '' : 'darknav'}>
      <div className={theme == 'light' ? 'navbar' : 'navbar dark'}>
        <Link to='/' className='link'>
          <h1>Where in the world ? </h1>
        </Link>
        <div
          className='theme-container'
          onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light');
          }}>
          <FontAwesomeIcon
            className='icon'
            icon={theme === 'light' ? faMoon : faSun}
          />
          {theme === 'light' ? <span>Dark Mode</span> : <span>Light Mode</span>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
