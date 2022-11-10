const Validate = (userData) => {
    let userDataBase=JSON.parse(localStorage.getItem("userDataBase")) || [];

    let userIndex = userDataBase.findIndex((user) => user.email===userData.email && user.password===userData.password);
    
    if (userIndex!=-1) {
        userDataBase[userIndex].validated = true;
        localStorage.setItem("userEmail", userData.email);
    };

    return(userIndex);
}

export default Validate;
