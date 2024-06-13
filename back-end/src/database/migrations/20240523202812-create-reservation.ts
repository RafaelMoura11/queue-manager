import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.createTable('Reservations', {
      id_reservation: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      nickname: {
        allowNull: false,
        type: DataTypes.STRING
      },
      phone: {
        allowNull: false,
        type: DataTypes.STRING
      },
      people_qty: {
        allowNull: false,
        type: DataTypes.INTEGER
      },
      date: {
        allowNull: false,
        type: DataTypes.DATE
      },
      is_active: {
        allowNull: false,
        type: DataTypes.BOOLEAN,
      },
      cpf_employee: {
        allowNull: false,
        type: DataTypes.STRING,
        references: {
          model: 'Employees',
          key: 'cpf'
        }
      }
    });
  },
  down: async (queryInterface: QueryInterface) => {
    await queryInterface.dropTable('Reservations');
  }
};
