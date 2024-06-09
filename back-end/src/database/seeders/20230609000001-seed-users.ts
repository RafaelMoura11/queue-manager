import { QueryInterface } from 'sequelize';
import * as bcrypt from 'bcryptjs';

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert('Users', [{
      email: 'admin@email.com',
      password: bcrypt.hashSync('admin123'),
      employee_cpf: '11111111111'
    }], {});
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('Users', { email: 'admin@email.com' }, {});
  }
};
