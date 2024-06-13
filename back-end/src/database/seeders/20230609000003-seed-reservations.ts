import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Reservations', [
      {
        nickname: 'Carlos',
        phone: '81912345678',
        people_qty: 2,
        date: '2024-06-21T13:00:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Mariana',
        phone: '81987654321',
        people_qty: 4,
        date: '2024-07-01T15:00:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'João',
        phone: '81923456789',
        people_qty: 1,
        date: '2024-07-15T14:00:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Ana',
        phone: '81934567890',
        people_qty: 3,
        date: '2024-07-15T14:00:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Pedro',
        phone: '81945678901',
        people_qty: 10,
        date: '2024-08-07T15:00:00',
        is_active: true,
        cpf_employee: '11111111111'
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Reservations', {});
  }
};
