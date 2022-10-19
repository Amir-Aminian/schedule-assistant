export const Register = (newUser) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];
    userDataBase.push(newUser);
    localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
}

export const SingIn = (userData) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];
    let validate = userDataBase.findIndex((user) => user.username===userData.username && user.password===userData.password);
    console.log(validate);
}