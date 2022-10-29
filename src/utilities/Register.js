const Register = (newUser) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];
    userDataBase.push(newUser);
    localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
}

export default Register;
