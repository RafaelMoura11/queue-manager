import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('CustomerPhones', {
      cpf_customer: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
        references: {
          model: 'Customers',
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
    await queryInterface.dropTable('CustomerPhones');
  }
};
