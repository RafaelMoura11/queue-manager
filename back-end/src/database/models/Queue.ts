import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Customer } from './Customer';
import { Employee } from './Employee';

@Table({
  timestamps: false,
})
export class Queue extends Model<Queue> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id_queue!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  people_qty!: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  date!: Date;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  comanda!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cpf_customer!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  cpf_employee!: string;

  @BelongsTo(() => Customer)
  customer!: Customer;

  @BelongsTo(() => Employee)
  employee!: Employee;
}
