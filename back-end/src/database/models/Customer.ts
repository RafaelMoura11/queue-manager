import { Model, DataTypes } from 'sequelize';
import sequelize from './'; // Assuming your Sequelize instance is exported

class Customer extends Model {
  cpf: string;

  fullName: string;
}

Customer.init({
  cpf: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'full_name'
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Customers',
  sequelize,
  modelName: 'Customer',
})

export default Customer;