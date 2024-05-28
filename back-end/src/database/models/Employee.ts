import { Model, DataTypes } from 'sequelize';
import sequelize from './';

class Employee extends Model {
  cpf: string;

  full_name: string;

  phone: string;
}

Employee.init({
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Employees',
  sequelize,
  modelName: 'Employee',
});

export default Employee;
