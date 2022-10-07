let userDataBase=[];

const Register = (newUser) => {
    userDataBase.push(newUser);
    localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
}

export default Register;