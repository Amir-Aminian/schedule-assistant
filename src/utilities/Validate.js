const Validate = (userData) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];
    let userIndex = userDataBase.findIndex((user) => user.username===userData.username && user.password===userData.password);
    return(userIndex);
}

export default Validate;
