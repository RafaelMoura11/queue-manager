import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import Employee from './Employee';

class User extends Model {
  id_user: number;
  email: string;
  password: string;
  employee_cpf: string;
}

User.init({
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  employee_cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Employee,
      key: 'cpf',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Users',
  sequelize,
  modelName: 'User',
});

User.belongsTo(Employee, {
  foreignKey: 'employee_cpf',
  targetKey: 'cpf',
  as: 'employee',
});

export default User;
