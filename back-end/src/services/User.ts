import UserModel from '../database/models/User';
import JWTUtils from '../utils/JWT';
import UserInterface from '../interfaces/Login';
import RegisterInterface from '../interfaces/Register';
import EmployeeService from './Employee';
import * as bcrypt from 'bcryptjs';

export default class User {
    static login(data: UserInterface): string {
        const token = JWTUtils.sign(data);
        return token;
    }

    static async register(data: RegisterInterface) {
        const user = await EmployeeService.getByCPF(data.cpf);

        if (user) {
            throw new Error();
        }
        
        await EmployeeService.create({
            cpf: data.cpf,
            fullName: data.fullName,
            phone: data.phone
        });
        
        await UserModel.create({
            email: data.email,
            password: bcrypt.hashSync(data.password),
            employee_cpf: data.cpf
        })

        return true;
    }
}