const ResetUserPassword = (userEmail, newPassword) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];

    // let userIndex = userDataBase.findIndex((user) => user.email===userData.email && user.password===userData.password);
    
    // localStorage.setItem("userDataBase", JSON.stringify(userDataBase));

    console.log(userDataBase);
}

export default ResetUserPassword;
