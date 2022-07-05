'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('airports', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      airportCode: {
        type: Sequelize.STRING
      },
      priorityOrder: {
        type: Sequelize.INTEGER,
      },
      locationId: {
        type: Sequelize.INTEGER,
      },
      airportOperatorId: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        type: Sequelize.DATE,
        field: 'created_at',
      },
      updatedAt: {
        type: Sequelize.DATE,
        field: 'updated_at',
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('airports');
  }
};