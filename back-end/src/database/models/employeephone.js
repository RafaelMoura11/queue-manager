'use strict';
module.exports = (sequelize, DataTypes) => {
  var EmployeePhone = sequelize.define('EmployeePhone', {
    employee_cpf: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return EmployeePhone;
};