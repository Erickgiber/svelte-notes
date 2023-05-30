import type { IUser } from "../interfaces/IUser";

export const setUserLocal = (data: IUser) => {
    const user = JSON.stringify({
        name:  data.name,
        photo: data.photo,
    });
    window.localStorage.setItem("user", user);
}