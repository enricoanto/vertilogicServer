'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here\
      Vendor.belongsToMany(models.Tag, { through: models.Vendor_Tag });
      Vendor.hasMany(models.Dish, {
        sourceKey: 'id',
        foreignKey: 'VendorId'
      })
    }
  };
  Vendor.init({
    name: {
      type:DataTypes.STRING,
    validate: {
      len: {
        args: [0,125],
        msg: "fields cannot exceed 128 characters"
      },
      notEmpty: {
        args: true,
        msg: 'Field must be not empty.'
      }
    } 
  }
      ,
    location: DataTypes.STRING,
    range_price: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Vendor',
  });
  return Vendor;
};