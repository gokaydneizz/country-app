import React from 'react';

const CountryCard = ({countryData}) => {
  const {flags, name, population, region, capital} = countryData;

  return (
    <div className='country-card-container'>
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
