import { Model, DataTypes } from 'sequelize';
import sequelize from './'; // Assuming your Sequelize instance is exported
import CustomerPhone from './CustomerPhone';

class Customer extends Model {
  cpf: string;

  full_name: string;
}

Customer.init({
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  full_name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Customers',
  sequelize,
  modelName: 'Customer',
})

export default Customer;