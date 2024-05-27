import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import User from './User';

class Message extends Model {
  id_message: number;
  message: string;
  id_user: number;
}

Message.init({
  id_message: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id_user',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Messages',
  sequelize,
  modelName: 'Message',
});

Message.belongsTo(User, {
  foreignKey: 'id_user',
  targetKey: 'id_user',
  as: 'user',
});

export default Message;
