import React from 'react';
import './view.css';

function View() {
  return (
      <div className='view'>
          <p>Вид</p>
          <div className='switcher'>
              <div className='case__table switcher__active '>Таблица</div>
              <div className='case__list'>Превью</div>
          </div>
      </div>
  );
}

export default View;