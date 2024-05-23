'use strict';
module.exports = (sequelize, DataTypes) => {
  var Reservation = sequelize.define('Reservation', {
    people_qty: DataTypes.INTEGER,
    date: DataTypes.DATE,
    cpf_customer: DataTypes.STRING,
    cpf_employee: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Reservation;
};