import React from 'react';
import {useState} from 'react';
import FilterCountries from './FilterCountries';
import axios from 'axios';
import {useEffect} from 'react';
import CountryCard from '../components/CountryCard';

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountries = async () => {
    const countryData = axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data));
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  console.log(countries);

  return (
    <div className='countries'>
      <div className='countries-container'>
        <FilterCountries />
        <div className='countries-div'>
          {countries?.map((country, idx) => (
            <CountryCard key={idx} countryData={country} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
