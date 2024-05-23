import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('EmployeePhones', {
      employee_cpf: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        references: {
          model: 'Employees',
          key: 'cpf'
        }
      },
      number: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING
      }
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('EmployeePhones');
  }
};
