'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employee.init({
    name: DataTypes.STRING,
    urlFile:DataTypes.STRING,
    idSST:DataTypes.STRING,
    eyeColor:DataTypes.STRING,
    height:DataTypes.STRING,
    issued:DataTypes.STRING,
    expires:DataTypes.STRING,
    test:DataTypes.STRING,
    test2:DataTypes.STRING,
    test3:DataTypes.STRING,
    certification:DataTypes.STRING,
    ctf2:DataTypes.STRING,
    ctf3:DataTypes.STRING, 
    issuedBy:DataTypes.STRING,
    iBy2:DataTypes.STRING,
    iBy3:DataTypes.STRING,
    verifiedBy:DataTypes.STRING,
    vrf2:DataTypes.STRING,
    vrf3:DataTypes.STRING,
    issuedOn:DataTypes.STRING,
    iuOn2:DataTypes.STRING,
    iuOn3:DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Employee',
  });
  return Employee;
};