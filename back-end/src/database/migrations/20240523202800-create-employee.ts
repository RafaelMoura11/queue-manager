import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('Employees', {
      cpf: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING
      },
      full_name: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING
      }
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Employees');
  }
};
