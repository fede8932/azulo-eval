// Modelo de tabla airport

'use strict';
import { Model } from 'sequelize';
import  { AirportAttributes }  from '../types'

module.exports = (sequelize : any, DataTypes : any) => {
  class Airport extends Model<AirportAttributes> 
  implements AirportAttributes{
    name!: string;
    airportOperatorId!: number;
    airportCode!: string;
    locationId!: number;
    priorityOrder!: number;
    createdAt!: Date;
    updatedAt!: Date;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : any) {
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