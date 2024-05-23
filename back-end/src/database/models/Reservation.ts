import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Customer } from './Customer';
import { Employee } from './Employee';

@Table({
  timestamps: false,
})
export class Reservation extends Model<Reservation> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id_reservation!: number;

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
