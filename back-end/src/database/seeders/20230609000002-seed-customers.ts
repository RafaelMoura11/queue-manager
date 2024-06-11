import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Customers', [
      {
        cpf: '12345678901',
        full_name: 'Alice',
        phone: '81912345678'
      },
      {
        cpf: '23456789012',
        full_name: 'Gabriel',
        phone: '81923456789'
      },
      {
        cpf: '34567890123',
        full_name: 'André',
        phone: '81934567890'
      },
      {
        cpf: '45678901234',
        full_name: 'Diana',
        phone: '81945678901'
      },
      {
        cpf: '12334890567',
        full_name: 'Rafael',
        phone: '81978903456'
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Customers', {});
  }
};
