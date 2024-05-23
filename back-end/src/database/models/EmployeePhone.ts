import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { Employee } from './Employee';

@Table({
  timestamps: false,
})
export class EmployeePhone extends Model<EmployeePhone> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  employee_cpf!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  number!: string;

  @BelongsTo(() => Employee)
  employee!: Employee;
}
