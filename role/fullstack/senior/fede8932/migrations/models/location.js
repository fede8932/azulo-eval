'use strict';
import { Model } from 'sequelize';


module.exports = (sequelize, DataTypes) => {
  class Location extends Model{
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
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