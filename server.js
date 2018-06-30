/*=============================== server.js ==================================|
|                           БАЗОВЫЕ НАСТРОЙКИ                                 |
|                       Выполнил: Nikita Naidenov                             |
=============================================================================*/
import express                from 'express'; //Подключение express framework
import bodyParser             from 'body-parser'; //Подключение body-parser json
import request                from 'request'; //Подключение request(Не нужный биомусор)
import cfg                    from './config/config.json'; //Подключение конфигурации
import coinmaster             from './CryptoCoin'; //Подключение выборки массива
/*
DROP TABLE `bidlocoins`;
DROP TABLE `SequelizeMeta`;
*/
let app = express();

app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: false }));

//Вывод парсинга с exmo
app.get('/api/exmo', (req, res, next) => {
  request({url: cfg.apiExmo, json: true},
    function (error, response, body) {
      if (!error && response.statusCode === 200) { //Быдло проверки
        res.json(body) // Вывод в json формате на страничку
        let exmo = new ParserExmo();
        exmo.render();
        console.log('Вывод парсинга с exmo ', getDateTime());
    }
  })
});

//Вывод парсинга с poloniex
app.get('/api/poloniex', (req, res, next) => {
  request({url: cfg.apiPoloniex, json: true},
    function (error, response, body) {
      if (!error && response.statusCode === 200) { //Быдло проверки
        res.json(body) // Вывод в json формате на страничку
        let poloniex = new ParserPoloniex();
        poloniex.render();
        console.log('Вывод парсинга с poloniex ', getDateTime());
    }
  })
});


// Запуск сервера
let server = app.listen(cfg.server.port, function() {
    console.log("Сервер запущен! Вот " + cfg.server.host + ":" + cfg.server.port);
});

/*=============================== ES 2016 ====================================
ЕГО НЕТ */
function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;

    return year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec;

}
class ParserExmo extends coinmaster {
    constructor() {
        let CoinMarketName = 'EXMO';
        let CoinBuy        = 'buy_price';
        let CoinSell       = 'sell_price'; 

        super(CoinMarketName, CoinBuy, CoinSell);
    }

    render() {
        this.fetchFromData(cfg.apiExmo).then(data => {
            let coinmasters = this.getFetchCoinValue(data);
            this.WTDB(coinmasters);
        });
    }
}


class ParserPoloniex extends coinmaster {
    constructor() {
        let CoinMarketName = 'poloniex';
        let CoinBuy        = 'lowestAsk';
        let CoinSell       = 'highestBid';


        super(CoinMarketName, CoinBuy, CoinSell);
    }

    render() {
        this.fetchFromData(cfg.apiPoloniex).then(data => {
            let coinmasters = this.getFetchCoinValue(data);
            this.WTDB(coinmasters);
        });
    }
}

module.exports = app;
