const SetTask = (taskData) => {
    let usersTasks=JSON.parse(localStorage.getItem("usersTasks")) || [];

    let userIndex = usersTasks.findIndex((data) => data.user===taskData.user);
    let dateIndex = usersTasks[userIndex].data.findIndex((data) => data[0][0][0]===taskData.data[0][0][0]);
        console.log(dateIndex)

    // if (userIndex!=-1) {
    //     let dateIndex = usersTasks[userIndex].data.findIndex((data) => data[0][0]===taskData.data[0][0]);
    //     if (dateIndex!=-1) {
    //         usersTasks[userIndex].data[dateIndex].push(taskData.data[0][1]);
    //     } else {
    //         usersTasks[userIndex].data.push(taskData.data[0]);
    //     };        
    // } else {
    //     usersTasks.push(taskData);
    // };

    // localStorage.setItem("usersTasks", JSON.stringify(usersTasks));
}

export default SetTask;