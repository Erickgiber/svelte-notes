import { setUserLocal } from "../../tools/setUserLocal";

export const handleChangeName = (event, user, $user) => {
    const name = event.target.value;
    const userUpdated ={ ...$user, name };
    user.set(userUpdated);
    setUserLocal(userUpdated);
};