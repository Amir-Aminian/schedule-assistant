const Register = (newUser) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];

    newUser.validated = false;

    userDataBase.push(newUser);
    
    localStorage.setItem("userDataBase", JSON.stringify(userDataBase));
}

export default Register;
