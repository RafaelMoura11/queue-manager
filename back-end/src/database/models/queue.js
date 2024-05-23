'use strict';
module.exports = (sequelize, DataTypes) => {
  var Queue = sequelize.define('Queue', {
    people_qty: DataTypes.INTEGER,
    date: DataTypes.DATE,
    comanda: DataTypes.STRING,
    cpf_customer: DataTypes.STRING,
    cpf_employee: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Queue;
};