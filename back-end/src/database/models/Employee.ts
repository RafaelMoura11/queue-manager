import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  timestamps: false,
})
export class Employee extends Model<Employee> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    primaryKey: true,
  })
  cpf!: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  full_name!: string;
}
