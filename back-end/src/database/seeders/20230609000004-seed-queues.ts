import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Queues', [
      {
        people_qty: 2,
        date: '2024-06-11T13:00:00',
        is_active: true,
        cpf_customer: '12345678901',
        cpf_employee: '11111111111'
      },
      {
        people_qty: 4,
        date: '2024-06-11T14:00:00',
        is_active: true,
        cpf_customer: '23456789012',
        cpf_employee: '11111111111'
      },
      {
        people_qty: 1,
        date: '2024-06-11T14:30:00',
        is_active: true,
        cpf_customer: '34567890123',
        cpf_employee: '11111111111'
      },
      {
        people_qty: 3,
        date: '2024-06-11T15:00:00',
        is_active: true,
        cpf_customer: '45678901234',
        cpf_employee: '11111111111'
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Queues', {});
  }
};
