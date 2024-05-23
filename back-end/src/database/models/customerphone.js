'use strict';
module.exports = (sequelize, DataTypes) => {
  var CustomerPhone = sequelize.define('CustomerPhone', {
    cpf_customer: DataTypes.STRING,
    number: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return CustomerPhone;
};