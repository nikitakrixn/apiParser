/*========================== CryptoCoin.js ===================================|
|                           БАЗОВЫЕ НАСТРОЙКИ                                 |
|                       Выполнил: Nikita Naidenov                             |
=============================================================================*/
import request from 'request'; //Подключение request(Не нужный биомусор)
import models from './models/index'; //Инициализируем всё с модели

export default class coinmaster {
    //Конструктор лего
    constructor(CoinMarketName = '' , CoinBuy = '', CoinSell = '') {
        this.CoinMarketName = CoinMarketName;
        this.CoinBuy        = CoinBuy;
        this.CoinSell       = CoinSell;
    }
    //возвращает Promise выполненый с переданным значением, иначе говоря сам парсер
    fetchFromData(link) {
        return new Promise((resolve)              => { 
            request(link,  (error, response, body)=> {
                if (!error && response.statusCode == 200) {
                    resolve(JSON.parse(body)); 
                }
            });
        });
    }
    //Адд ту дата бейзз
    WTDB(coinmasters) {
        console.log('Write To database - Выполнено');
        for (let coin of coinmasters) {
            models.coinmaster.create({
                CoinMarketName: coin.CoinMarketName,
                CoinName      : coin.CoinName,
                CoinBuy       : coin.CoinBuy,
                CoinSell      : coin.CoinSell
            });  
        }
    }
    //Заполнение массива данными
    getFetchCoinValue(data) {
        let state = [];
        const coinList = this.getListKey(data);
        for (let coin of coinList) {
            let obj      = data[coin];         //Название криптовалюты
            let CoinBuy  = obj[this.CoinBuy];  //Покупка
            let CoinSell = obj[this.CoinSell]; //Продажа

            state.push(this.getCoinMasterLine(this.CoinMarketName, coin, CoinBuy, CoinSell));
        }
        return state;
    }

    getListKey(data) {
        return Object.keys(data);
    }

    getCoinMasterLine(CoinMarketName, CoinName, CoinBuy, CoinSell){
      return {
        'CoinMarketName': CoinMarketName, 
        'CoinName'      : CoinName.toLowerCase(), 
        'CoinBuy'       : CoinBuy, 
        'CoinSell'      : CoinSell
        }
    } 
};