const SetTask = (userTask) => {
    let usersTasks=JSON.parse(localStorage.getItem("usersTasks")) || [];
    let user = [];
    let date = [];    
    let conflict = 0;

    usersTasks.forEach((data) => {
        if (data.user===userTask.user) {
            user.push(data);
        }
    });

    if (user.length === 0) {
        usersTasks.push(userTask);
        localStorage.setItem("usersTasks", JSON.stringify(usersTasks));
        return(true);
    };

    user.forEach((data) => {
        if (data.date===userTask.date) {
            date.push(data)
        } 
    });

    if (date.length === 0) {
        usersTasks.push(userTask);
        localStorage.setItem("usersTasks", JSON.stringify(usersTasks));
        return(true);
    };

    date.forEach((data) => {
        if (((data.task.startTime <= userTask.task.startTime) && (userTask.task.startTime < data.task.endTime)) || ((data.task.startTime < userTask.task.endTime) && (userTask.task.endTime <= data.task.endTime))) {
            conflict++;
        } else if (((data.task.startTime >= userTask.task.startTime) && (data.task.startTime < userTask.task.endTime)) || ((data.task.endTime > userTask.task.startTime) && (userTask.task.endTime >= data.task.endTime))) {
            conflict++;
        }
    }); 
    
    if (conflict != 0) {
        alert("You cannot add this task due to a time conflict with another task.");
        conflict = 0;
    } else {
        if (userTask.task.startTime===userTask.task.endTime) {
            alert("Task cannot start and end at the same exact time.");
        } else {
            usersTasks.push(userTask);
        localStorage.setItem("usersTasks", JSON.stringify(usersTasks));
        return(true);
        };        
    };
}

export default SetTask;