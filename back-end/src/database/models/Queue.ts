import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import Employee from './Employee';

class Queue extends Model {
  idQueue: number;
  nickname: string;
  phone: string;
  peopleQty: number;
  date: Date;
  isActive: Boolean;
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
  nickname: {
    allowNull: false,
    type: DataTypes.STRING
  },
  phone: {
    allowNull: false,
    type: DataTypes.STRING
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
    allowNull: false,
    field: 'is_active'
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

Queue.belongsTo(Employee, {
  foreignKey: 'cpf_employee',
  targetKey: 'cpf',
  as: 'employee',
});

Employee.hasMany(Queue, {
  foreignKey: 'cpf_employee',
  sourceKey: 'cpf',
  as: 'queues',
});

export default Queue;
