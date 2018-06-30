'use strict';
module.exports = (sequelize, DataTypes) => {
  var coinmaster = sequelize.define('coinmaster', {
    CoinMarketName: DataTypes.STRING,
    CoinName: DataTypes.STRING,
    CoinBuy: DataTypes.DOUBLE,
    CoinSell: DataTypes.DOUBLE
  }, {});
  coinmaster.associate = function(models) {
    // associations can be defined here
  };
  return coinmaster;
};
