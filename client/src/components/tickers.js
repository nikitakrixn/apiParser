/*============================ tickers.js ====================================|
|                           БАЗОВЫЕ НАСТРОЙКИ                                 |
|                       Выполнил: Nikita Naidenov                             |
=============================================================================*/
import React, { Component } from 'react';
import './tickers.css';

class Tickers extends Component {
  constructor() {
    super();
    this.state = {
      poloniex: [],
      exmo: []
    };
  }
  
  // Компонент загрузился - данные загружаются и обновляются каждые 30 секунд
  componentWillMount () {
    this.fetchfromExmo();
    this.fetchfromPoloniex();
    this.interval = setInterval(() => this.fetchfromExmo(),  30 * 1000);
    this.interval = setInterval(() => this.fetchfromPoloniex(),  30 * 1000);
  }
  // Получаем данные исходные данные с сервера
  fetchfromExmo() {
    fetch('/api/exmo')
      .then(res => res.json())
      .then(exmo => this.setState({exmo}, () => console.log('Crypto fetched from exmo...', exmo)));
  }

  fetchfromPoloniex() {
    fetch('/api/poloniex')
      .then(res => res.json())
      .then(poloniex => this.setState({poloniex}, () => console.log('Crypto fetched from poloniex...', poloniex)));
  }

  render() {
    return (
      <div>
        <h2>PARSE COINMASTER EXMO</h2>
        {Object.keys(this.state.exmo).map((exmo) =>(
          <div id="bidlocoin-container">
            <span className="left">{exmo}</span>
            <span className="right">Покупка: {this.state.exmo[exmo].buy_price}</span>
            <span className="center">Продажа: {this.state.exmo[exmo].sell_price}</span>
          </div>
          ))}
        <h2>PARSE COINMASTER POLONIEX</h2>
        {Object.keys(this.state.poloniex).map((plx) =>(
          <div id="bidlocoin-container">
            <span className="left">{plx}</span>
            <span className="right">Покупка: {this.state.poloniex[plx].lowestAsk}</span>
            <span className="center">Продажа: {this.state.poloniex[plx].highestBid}</span>
          </div>
          ))}
      </div>
    );
  }
}

export default Tickers;