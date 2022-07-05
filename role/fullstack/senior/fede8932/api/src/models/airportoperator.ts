'use strict';
import { Model } from 'sequelize';
import { AirportOperatorAttributes } from '../types'

module.exports = (sequelize : any, DataTypes : any) => {
  class AirportOperator extends Model<AirportOperatorAttributes>
  implements AirportOperatorAttributes{
    name!: string;
    createdAt!: Date;
    usdatedAt!: Date;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : any) {
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