import { Options } from 'sequelize';

const config: Options = {
  username: 'root',
  password: 'root',
  database: 'mascate',
  host: 'db',
  port: 3306,
  dialect: 'mysql',
  dialectOptions: {
    timezone: 'Z',
  },
  logging: false,
}

module.exports = config;
