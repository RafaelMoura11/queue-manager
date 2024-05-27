import { Model, DataTypes, BelongsTo, ForeignKey } from 'sequelize';
import sequelize from './';
import Customer from './Customer';

class CustomerPhone extends Model {
  cpf_customer: string;

  number: string;
}

CustomerPhone.init({
  cpf_customer: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  number: {
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

// export class CustomerPhone extends Model {
  
//   cpf_customer!: string;

  
//   number!: string;

//   @BelongsTo(() => Customer)
//   customer!: Customer;
// }
