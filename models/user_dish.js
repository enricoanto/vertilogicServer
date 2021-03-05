'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Dish extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User_Dish.belongsTo(models.User, {
        targetKey: 'id',
        foreignKey: 'UserId'
      })
      User_Dish.belongsTo(models.Dish, {
        targetKey: 'id',
        foreignKey: 'DishId'
      })
    }
  };
  User_Dish.init({
    UserId: DataTypes.INTEGER,
    DishId: DataTypes.INTEGER,
    notes: DataTypes.STRING,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Dish',
  });
  return User_Dish;
};