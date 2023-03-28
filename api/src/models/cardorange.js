'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CardOrange extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  CardOrange.init({
    name: DataTypes.STRING,
    card:DataTypes.STRING, 
    hours:DataTypes.STRING,
     date:DataTypes.STRING, 
     amORpm:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CardOrange',
  });
  return CardOrange;
};