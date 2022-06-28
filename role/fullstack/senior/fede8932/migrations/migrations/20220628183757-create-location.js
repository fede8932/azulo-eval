'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Country: {
        type: Sequelize.STRING
      },
      ProvinceOrState: {
        type: Sequelize.STRING
      },
      Latitude: {
        type: Sequelize.INTEGER
      },
      Longitude: {
        type: Sequelize.INTEGER
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Locations');
  }
};