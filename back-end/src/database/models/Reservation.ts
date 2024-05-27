import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import Customer from './Customer';
import Employee from './Employee';

class Reservation extends Model {
  id_reservation: number;
  people_qty: number;
  date: Date;
  comanda: string;
  cpf_customer: string;
  cpf_employee: string;
}

Reservation.init({
  id_reservation: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  people_qty: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  comanda: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cpf_customer: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Customer,
      key: 'cpf',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  cpf_employee: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: Employee,
      key: 'cpf',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  }
}, {
  underscored: true,
  timestamps: false,
  tableName: 'Reservations',
  sequelize,
  modelName: 'Reservation',
});

Reservation.belongsTo(Customer, {
  foreignKey: 'cpf_customer',
  targetKey: 'cpf',
  as: 'customer',
});

Reservation.belongsTo(Employee, {
  foreignKey: 'cpf_employee',
  targetKey: 'cpf',
  as: 'employee',
});

Customer.hasMany(Reservation, {
  foreignKey: 'cpf_customer',
  sourceKey: 'cpf',
  as: 'reservations',
});

Employee.hasMany(Reservation, {
  foreignKey: 'cpf_employee',
  sourceKey: 'cpf',
  as: 'reservations',
});

export default Reservation;
