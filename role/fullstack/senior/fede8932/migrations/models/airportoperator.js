'use strict';
import { Model } from 'sequelize';

module.exports = (sequelize, DataTypes) => {
  class AirportOperator extends Model{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.airports.belongsTo(AirportOperator, { foreignKey: 'airportOperatorId' })
      // define association here
    }
  }
  AirportOperator.init({
    name: DataTypes.STRING,
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
    modelName: 'airport_operators',
    timestamps: true,
    underscored: true,
  });
  return AirportOperator;
};