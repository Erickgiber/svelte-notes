export const createUserLocal = () => {
    if (window.localStorage.getItem("user")) return;
    
    const user = JSON.stringify({
        name:  "Your Name",
        photo: "/src/assets/user.webp",
    });
    window.localStorage.setItem("user", user);
}