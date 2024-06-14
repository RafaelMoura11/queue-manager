import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Queues', [
      {
        nickname: 'Massuello',
        phone: '81997720800',
        people_qty: 1,
        date: '2024-06-15T13:00:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Juliana',
        phone: '81997720800',
        people_qty: 4,
        date: '2024-06-15T13:05:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Lucas',
        phone: '81997720800',
        people_qty: 1,
        date: '2024-06-15T13:10:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Renata',
        phone: '81997720800',
        people_qty: 3,
        date: '2024-06-15T13:15:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Felipe',
        phone: '81997720800',
        people_qty: 10,
        date: '2024-06-15T13:20:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Fernanda',
        phone: '81997720800',
        people_qty: 2,
        date: '2024-06-15T13:25:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Gabriel',
        phone: '81997720800',
        people_qty: 4,
        date: '2024-06-15T13:30:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Isabela',
        phone: '81997720800',
        people_qty: 1,
        date: '2024-06-15T13:35:00',
        is_active: true,
        cpf_employee: '11111111111'
      },
      {
        nickname: 'Rafael',
        phone: '81997720800',
        people_qty: 3,
        date: '2024-06-15T13:40:00',
        is_active: true,
        cpf_employee: '11111111111'
      }
    ], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Queues', {});
  }
};
