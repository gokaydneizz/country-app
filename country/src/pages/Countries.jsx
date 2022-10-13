import React from 'react';
import {useState} from 'react';
import FilterCountries from './FilterCountries';
import axios from 'axios';
import {useEffect} from 'react';
import CountryCard from '../components/CountryCard';

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredByRegion, setFilteredByRegion] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    const countryData = await axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => setCountries(response.data));
  };

  useEffect(() => {
    setLoading(true);
    fetchCountries();
    setLoading(false);
  }, []);

  let data =
    filteredByRegion.length > 0
      ? filteredByRegion.filter(country =>
          country.name.common.includes(inputValue)
        )
      : countries.filter(country => country.name.common.includes(inputValue));

  const inputHandler = value => {
    setInputValue(value);
  };

  const regionHandler = region => {
    setFilteredByRegion(
      countries.filter(country => {
        return country.region === region;
      })
    );
  };

  return (
    <div className='countries'>
      <div className='countries-container'>
        <FilterCountries region={regionHandler} input={inputHandler} />
        <div className='countries-div'>
          {data.map((country, idx) => (
            <CountryCard key={idx} countryData={country} />
          ))}
          {!loading && data.length === 0 && <h1>NO DATA FOUND</h1>}
        </div>
      </div>
    </div>
  );
};

export default Countries;
