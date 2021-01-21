import React from 'react';
import FilterGrow from './FilterGrow';
import FilterType from './FilterType';
import './filter.css'

function Filter() {
  return (
      <div className='filter'>
            <p>Сортировка</p>
            <FilterType/>
            <FilterGrow/>
      </div>
  );
}

export default Filter;