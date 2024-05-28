import JWTUtils from 'src/utils/JWT';
import UserInterface from '../interfaces/Login';

export default class User {
    static login(data: UserInterface): string {
        const token = JWTUtils.sign(data);
        return token;
    }
}