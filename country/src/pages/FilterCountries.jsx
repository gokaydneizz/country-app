import React, {useEffect} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';
import {useContext} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const FilterCountries = ({region, input}) => {
  const [selectFilter, setSelectFilter] = useState('Filter by region');
  const [selectOpen, setSelectOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const {theme} = useContext(ThemeContext);

  const regions = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  useEffect(() => {
    region(selectFilter);
  }, [selectFilter]);

  useEffect(() => {
    input(inputValue);
  }, [inputValue]);

  // useEffect(() => {
  //   input(inputRef.current?.value);
  // }, [inputRef.current?.value]);

  return (
    <section className='filter-section'>
      <div className={theme === 'light' ? 'inputBox' : 'inputBox dark'}>
        <FontAwesomeIcon className='input-icon' icon={faMagnifyingGlass} />
        <input
          type='text'
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
          placeholder='Search for a country...'
        />
      </div>
      <div className={theme === 'light' ? 'select' : 'select dark'}>
        <div
          onClick={() => setSelectOpen(prev => !prev)}
          className='select-title'>
          <span>{selectFilter}</span>
          <FontAwesomeIcon
            className='select-icon'
            icon={selectOpen ? faChevronUp : faChevronDown}
          />
        </div>
        {selectOpen && (
          <ul className='list' onClick={() => setSelectOpen(prev => !prev)}>
            {regions.map((region, idx) => {
              return (
                <li
                  value={region}
                  key={idx}
                  onClick={() => setSelectFilter(region)}>
                  {region}
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
};

export default FilterCountries;
