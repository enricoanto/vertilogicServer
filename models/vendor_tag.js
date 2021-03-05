'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Vendor_Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vendor_Tag.belongsTo(models.Vendor,{
        targetKey: 'id',
        foreignKey: 'VendorId'
      })
      Vendor_Tag.belongsTo(models.Tag, {
        targetKey: 'id',
        foreignKey:'TagId'
      })
    }
  };
  Vendor_Tag.init({
    VendorId: DataTypes.INTEGER,
    TagId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vendor_Tag',
  });
  return Vendor_Tag;
};