'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      AirportOperatorId: {
        type: Sequelize.INTEGER
      },
      AirportCode: {
        type: Sequelize.STRING
      },
      LocationId: {
        type: Sequelize.INTEGER
      },
      PriorityOrder: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Airports');
  }
};