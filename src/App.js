import React from 'react';

import './App.scss';

import logo from './assets/mi-logo--white.svg';

import Routes from './routes'

function App() {
  return (
    <div className='container'>
      <a href='https://app.minhasaudiencias.com.br/login' target="_blank" className='btn-login'>
        Login
      </a>
      <img className='logo' src={logo} alt='AirCnC' />
      <Routes />
      <div id='overlay'></div>
    </div>
  );
}

export default App;
