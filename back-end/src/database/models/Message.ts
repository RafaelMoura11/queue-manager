import { Table, Column, Model, DataType, BelongsTo, ForeignKey } from 'sequelize-typescript';
import { User } from './User';

@Table({
  timestamps: false,
})
export class Message extends Model<Message> {
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id_message!: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  message!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id_user!: number;

  @BelongsTo(() => User)
  user!: User;
}
