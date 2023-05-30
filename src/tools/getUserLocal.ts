// eslint-disable-next-line
// @ts-ignore
import { IUser } from '../interfaces/IUser';

export const getUserLocal = (): IUser => {
    return JSON.parse(localStorage.getItem('user'));
}