import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faMagnifyingGlass,
  faChevronDown,
  faChevronUp,
} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

const FilterCountries = () => {
  const [selectFilter, setSelectFilter] = useState('Filter by region');
  const [selectOpen, setSelectOpen] = useState(false);

  const regions = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Ocenia'];

  return (
    <section className='filter-section'>
      <div className='inputBox'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type='text' placeholder='Search for a country...' />
      </div>
      <div className='select'>
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
