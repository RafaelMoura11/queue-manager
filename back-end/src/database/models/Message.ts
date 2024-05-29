import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import User from './User';

class Message extends Model {
  idMessage: number;
  message: string;
  idUser: number;
}

Message.init({
  idMessage: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_message'
  },
  message: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  idUser: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_user',
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
