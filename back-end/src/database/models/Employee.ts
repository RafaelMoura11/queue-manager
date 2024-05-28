import { Model, DataTypes } from 'sequelize';
import sequelize from './';

class Employee extends Model {
  cpf: string;

  fullName: string;

  phone: string;
}

Employee.init({
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'full_name'
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
