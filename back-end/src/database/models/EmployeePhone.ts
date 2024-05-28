import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import Employee from './Employee';

class EmployeePhone extends Model {
  employee_cpf: string;
  number: string;
}

EmployeePhone.init({
  employee_cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'EmployeePhones',
  sequelize,
  modelName: 'EmployeePhone',
});


EmployeePhone.belongsTo(Employee, {
  foreignKey: 'employee_cpf',
  targetKey: 'cpf',
  as: 'employee',
});

Employee.hasMany(EmployeePhone, {
  foreignKey: 'employee_cpf',
  sourceKey: 'cpf',
  as: 'phones',
});

export default EmployeePhone;
