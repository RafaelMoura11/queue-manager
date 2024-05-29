import { Model, DataTypes } from 'sequelize';
import sequelize from './';
import Customer from './Customer';
import Employee from './Employee';

class Reservation extends Model {
  idReservation: number;
  peopleQty: number;
  date: Date;
  cpfCustomer: string;
  cpfEmployee: string;
}

Reservation.init({
  idReservation: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'id_reservation'
  },
  peopleQty: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'people_qty'
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  cpfCustomer: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'cpf_customer',
    references: {
      model: Customer,
      key: 'cpf',
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
  },
  cpfEmployee: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'cpf_employee',
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
