'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AirportOperator extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AirportOperator.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AirportOperator',
  });
  return AirportOperator;
};