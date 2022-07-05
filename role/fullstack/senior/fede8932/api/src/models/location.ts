'use strict';
import { Model } from 'sequelize';
import { LocationAttributes } from '../types'


module.exports = (sequelize : any, DataTypes : any) => {
  class Location extends Model<LocationAttributes> 
  implements LocationAttributes{
    country!: string;
    province_or_state!: string;
    latitude!: number;
    longitude!: number;
    createdAt!: Date;
    updatedAt!: Date;
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models : any) {
      models.airports.belongsTo(Location)
      // define association here
    }
  }
  Location.init({
    country: DataTypes.STRING,
    province_or_state: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.INTEGER,
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
    modelName: 'locations',
    timestamps: true,
    underscored: true,
  });
  return Location;
};