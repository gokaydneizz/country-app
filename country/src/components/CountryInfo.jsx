import React from 'react';
import {useEffect} from 'react';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const CountryInfo = ({data}) => {
  const {
    flags,
    capital,
    name,
    population,
    region,
    languages,
    subregion,
    currencies,
    tld,
    altSpellings,
    borders,
  } = data;

  console.log(data);

  const {theme} = useContext(ThemeContext);

  const currenciesArr = [];
  const languagesArr = [];

  for (const currency in currencies) {
    currenciesArr.push(currency);
  }

  useEffect(() => {
    document.body.style.backgroundColor =
      theme == 'light' ? 'hsl(0, 0%, 98%)' : 'hsl(207, 26%, 17%)';
  }, [theme]);

  for (const [key, value] of Object.entries(languages)) {
    languagesArr.push(value);
  }
  const languagesArrJoined = languagesArr?.join(',');

  return (
    <div
      className={
        theme === 'light'
          ? 'country-info-container'
          : 'country-info-container dark'
      }>
      <div className='country-image-box'>
        <img src={flags.svg} alt='' />
      </div>
      <div className='contentBox'>
        <h1>{name.common}</h1>
        <div className='content-list'>
          <div className='content-list-first'>
            <div className='list-item'>
              <span>Native Name : </span> {altSpellings[1]}
            </div>
            <div className='list-item'>
              <span>Population : </span> {population}
            </div>
            <div className='list-item'>
              <span>Region : </span> {region}
            </div>
            <div className='list-item'>
              <span>Sub Region : </span> {subregion}
            </div>
            <div className='list-item'>
              <span>Capital : </span> {capital}
            </div>
          </div>
          <div className='content-list-second'>
            <div className='list-item'>
              <span>Top Level Domain : </span> {tld}
            </div>
            <div className='list-item'>
              <span>Currencies : </span>{' '}
              {currenciesArr?.map((currency, idx) => (
                <span key={idx} style={{fontWeight: 300}}>
                  {currency}
                </span>
              ))}
            </div>
            <div className='list-item'>
              <span>Languages : </span> {languagesArrJoined}
            </div>
          </div>
        </div>
        <div className='border-countries'>
          <b>Border Countries : </b>{' '}
          {borders?.map((border, idx) => (
            <button className='border-country' key={idx}>
              {border}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CountryInfo;
