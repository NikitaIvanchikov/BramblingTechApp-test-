import React from 'react';
import Filter from './Filter/Filter';
import View from './View/View';


function Header() {
  return (
      <div className='header'>
        <div className='container'>
          <div className='row'>
            <Filter/>
            <View/>
          </div>
        </div>
      </div>
  );
}

export default Header;