import React from 'react';
import "./common/style/reset.css";
import "./common/style/base.css";
import Header from './App/Header/Header';
import Main from './App/Main/Main';
import data from './data/data.json'


fetch(`${data}.json`)
.then(response => response.json())
.then(data => console.log(data))

function App() {
  return (
    <div className='app'>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
