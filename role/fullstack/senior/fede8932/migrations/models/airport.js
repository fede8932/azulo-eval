'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class Airport extends Model{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Airport.belongsTo(models.locations)
      models.airport_operators.hasMany(Airport, { foreignKey: 'airportOperatorId' })
    }
  }
  Airport.init({
    name: DataTypes.STRING,
    airportOperatorId: DataTypes.INTEGER,
    airportCode: DataTypes.STRING,
    locationId: DataTypes.INTEGER,
    priorityOrder: DataTypes.INTEGER,
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at',
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at',
    }
  }, {
    sequelize,
    modelName: 'airports',
    timestamps: true,
  });
  return Airport;
};