import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Customer } from './Customer';

@Table({
  timestamps: false,
})
export class CustomerPhone extends Model<CustomerPhone> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  cpf_customer!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  number!: string;

  @BelongsTo(() => Customer)
  customer!: Customer;
}
