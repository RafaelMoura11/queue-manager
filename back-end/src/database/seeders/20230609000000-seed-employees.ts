import { QueryInterface } from 'sequelize';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Employees', [{
      cpf: '11111111111',
      full_name: 'Admin',
      phone: '81998765432'
    }], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Employees', { cpf: '11111111111' }, {});
  }
};
