import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import Customer from './Customer';
import Employee from './Employee';

class Queue extends Model {
  idQueue: number;
  peopleQty: number;
  date: Date;
  isActive: Boolean;
  cpfCustomer: string;
  cpfEmployee: string;
}

Queue.init({
  idQueue: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_queue'
  },
  peopleQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'people_qty'
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  isActive: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  cpfCustomer: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'cpf_customer',
    references: {
      model: Customer,
      key: 'cpf',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  cpfEmployee: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'cpf_employee',
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
