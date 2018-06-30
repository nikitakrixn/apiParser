/*============================ App.js ========================================|
|                           БАЗОВЫЕ НАСТРОЙКИ                                 |
|                       Выполнил: Nikita Naidenov                             |
=============================================================================*/
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Tickers from './components/tickers';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">BIDLOCOIN EXMO</h1>
        </header>
        <Tickers />
      </div>
    );
  }
}

export default App;
