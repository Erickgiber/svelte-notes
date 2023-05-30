import { setUserLocal } from "../../tools/setUserLocal";

export const handleChangeName = (event, user, $user) => {
    const name = event.target.value;
    user.set({ ...$user, name });
    setUserLocal($user);
};