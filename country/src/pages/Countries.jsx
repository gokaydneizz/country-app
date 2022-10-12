import React from 'react';
import {useState} from 'react';
import FilterCountries from './FilterCountries';
import axios from 'axios';
import {useEffect} from 'react';
import CountryCard from '../components/CountryCard';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredByRegion, setFilteredByRegion] = useState([]);
  let data = [];

  const fetchCountries = async () => {
    const countryData = await axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data));
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const regionHandler = region => {
    setFilteredByRegion(
      countries.filter(country => {
        return country.region === region;
      })
    );
  };

  if (filteredByRegion.length > 0) {
    data = filteredByRegion;
  } else {
    data = countries;
  }
  return (
    <div className='countries'>
      <div className='countries-container'>
        <FilterCountries region={regionHandler} />
        <div className='countries-div'>
          {data.map((country, idx) => (
            <CountryCard
              key={idx}
              countryData={country}
              region={regionHandler}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Countries;
