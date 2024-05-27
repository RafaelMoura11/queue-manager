import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import Customer from './Customer';
import { Employee } from './Employee';

class Queue extends Model {
  id_queue: number;

  people_qty: number;

  date: Date;

  comanda: string;

  cpf_customer: string;

  cpf_employee: string;
}

Queue.init({
  id_queue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },

  people_qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },

  comanda: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cpf_customer: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cpf_employee: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Customers',
  sequelize, // Pass the Sequelize instance here
  modelName: 'Customer',
})

export default Queue;
