'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('coinmasters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      CoinMarketName: {
        type: Sequelize.STRING
      },
      CoinName: {
        type: Sequelize.STRING
      },
      CoinBuy: {
        type: Sequelize.DOUBLE(10,8, 'double')
      },
      CoinSell: {
        type: Sequelize.DOUBLE(10,8, 'double')
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('coinmasters');
  }
};
