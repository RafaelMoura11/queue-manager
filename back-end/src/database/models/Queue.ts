import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import Customer from './Customer';
import Employee from './Employee';

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
    references: {
      model: Customer,
      key: 'cpf',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  cpf_employee: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Employee,
      key: 'cpf',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Queues',
  sequelize,
  modelName: 'Queue',
});

Queue.belongsTo(Customer, {
  foreignKey: 'cpf_customer',
  targetKey: 'cpf',
  as: 'customer',
});

Queue.belongsTo(Employee, {
  foreignKey: 'cpf_employee',
  targetKey: 'cpf',
  as: 'employee',
});

Customer.hasMany(Queue, {
  foreignKey: 'cpf_customer',
  sourceKey: 'cpf',
  as: 'queues',
});

Employee.hasMany(Queue, {
  foreignKey: 'cpf_employee',
  sourceKey: 'cpf',
  as: 'queues',
});

export default Queue;
