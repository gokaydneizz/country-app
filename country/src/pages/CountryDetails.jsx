import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Navbar from './Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import CountryInfo from '../components/CountryInfo';

const CountryDetails = props => {
  const location = useLocation();
  const {state} = location;
  const navigator = useNavigate();

  return (
    <>
      <Navbar />
      <div className='country-details-container'>
        <div className='back-btn-container' onClick={() => navigator('/')}>
          <FontAwesomeIcon icon={faArrowLeft} />
          <span>Back</span>
        </div>
        <CountryInfo data={state} />
      </div>
    </>
  );
};

export default CountryDetails;
