export const Register = (newUser) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];
    userDataBase.push(newUser);
    localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
}

export const Validation = (userData) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];
    let userIndex = userDataBase.findIndex((user) => user.username===userData.username && user.password===userData.password);
    userIndex != -1 ? alert("amir") : alert("error");
}
