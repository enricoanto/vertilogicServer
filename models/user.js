'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Dish, { through: models.User_Dish })
    }
  };
  User.init({
    name: DataTypes.STRING,
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          args: true,
          msg: 'Field must be not empty.'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        len: {
          args: [6],
          msg: 'password at least 6 characters'
        },
        notEmpty: {
          args: true,
          msg: 'Field must be not empty.'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: ((user) => {
        user.password = hashPassword(user.password)
      })
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};