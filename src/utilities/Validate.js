const Validate = (userData) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];

    let userIndex = userDataBase.findIndex((user) => user.email===userData.email && user.password===userData.password);
    
    return(userIndex);
}

export default Validate;
