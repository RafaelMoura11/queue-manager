import EmployeeModel from '../database/models/Employee';
import EmployeeInterface from '../interfaces/Employee';

export default class Employee {
    static async getAll(): Promise<EmployeeInterface[]> {
        const employees: EmployeeInterface[] = await EmployeeModel.findAll();
        return employees;
    }

    static async getByCPF(cpf: string) {
        const employee: EmployeeInterface | null = await EmployeeModel.findOne({ where: { cpf } });
        return employee;
    }

    static async create(newEmployee: EmployeeInterface) {
        await EmployeeModel.create({
            cpf: newEmployee.cpf,
            fullName: newEmployee.fullName,
            phone: newEmployee.phone
        });
        return true;
    }

    static async update(employeeToBeUpdated: EmployeeInterface) {
        const employee = await this.getByCPF(employeeToBeUpdated.cpf);

        if (!employee) {
            throw new Error();
        }

        await EmployeeModel.update({
            fullName: employeeToBeUpdated.fullName,
            phone: employeeToBeUpdated.phone
        }, { where: {
            cpf: employeeToBeUpdated.cpf
        } });
        return true;
    }

    static async delete(cpf: string) {
        const employee = await this.getByCPF(cpf);

        if (!employee) {
            throw new Error();
        }
        await EmployeeModel.destroy({ where: { cpf } });
        return true;
    }
}