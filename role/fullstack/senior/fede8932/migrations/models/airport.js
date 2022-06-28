'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsTo(models.Location, {
        foreignKey: 'LocationId',
        onDelete: 'CASCADE'
      })
      models.AirportOperator.hasMany(Airport, {
        foreignKey: 'AirportOperatorId',
        onDelete: 'CASCADE'
      })
    }
  }
  Airport.init({
    Name: DataTypes.STRING,
    AirportOperatorId: DataTypes.INTEGER,
    AirportCode: DataTypes.STRING,
    LocationId: DataTypes.INTEGER,
    PriorityOrder: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};