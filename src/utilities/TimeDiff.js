const TimeDiff = (startTime, endTime) => {
    let joined;
    const splited = endTime.split(":");
    let minute = splited[1]-15;
    let hour = splited[0];

    if (minute<0) {
        minute = 60 + minute;
        hour = hour - 1;
        joined = [hour, minute].join(":");
    } else {
        joined = [hour, minute].join(":");
    };

    if (joined < startTime) {
        return(true);
    } else {
        return(false);
    }
};

export default TimeDiff;