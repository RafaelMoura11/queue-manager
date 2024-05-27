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
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  number: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'CustomerPhones',
  sequelize,
  modelName: 'CustomerPhone',
})

CustomerPhone.belongsTo(Customer, {
  foreignKey: 'cpf_customer',
  targetKey: 'cpf',
  as: 'customer', // Nome do alias para a associação
});

Customer.hasMany(CustomerPhone, {
  foreignKey: 'cpf_customer',
  sourceKey: 'cpf',
  as: 'phones',
});

export default CustomerPhone;
