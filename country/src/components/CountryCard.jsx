import React from 'react';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import {ThemeContext} from '../context/ThemeContext';

const CountryCard = ({countryData}) => {
  const {flags, name, population, region, capital} = countryData;

  const {theme} = useContext(ThemeContext);

  const navigate = useNavigate();

  const navigateToDetails = () => {
    navigate(`country/${name.common}`, {state: countryData});
  };
  return (
    <div
      className={
        theme === 'light'
          ? 'country-card-container'
          : 'country-card-container dark'
      }
      onClick={navigateToDetails}>
      <div className='country-flag'>
        <img src={flags.png} alt='flag' />
      </div>
      <div className='content'>
        <h1>{name.common}</h1>
        <ul>
          <li>
            <span>Population : </span> {population}
          </li>
          <li>
            <span>Region : </span> {region}
          </li>
          <li>
            <span>Capital : </span> {capital}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CountryCard;
