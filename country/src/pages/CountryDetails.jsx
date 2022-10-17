import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import CountryInfo from '../components/CountryInfo';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const CountryDetails = props => {
  const location = useLocation();
  const {state} = location;
  const navigator = useNavigate();

  const {theme} = useContext(ThemeContext);

  return (
    <>
      <Navbar />
      <div className='country-details-container'>
        <div
          className={
            theme === 'light' ? 'back-btn-container' : 'back-btn-container dark'
          }
          onClick={() => navigator('/')}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </div>
        <CountryInfo data={state} />
      </div>
    </>
  );
};

export default CountryDetails;
