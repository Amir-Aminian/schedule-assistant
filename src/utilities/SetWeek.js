const SetWeek = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month;

    let weekDates=[];

    let date = d.getDate()+1;

    let startDate = new Date(d);

    let endDate = new Date(d);

    let startIndex = date-d.getDay();

    let endIndex = startIndex+6;

    for (let i = startIndex; i <= endIndex; i++) {
        weekDates.push(new Date(startDate.setDate(i)).getDate());
    };

    if (months[new Date(startDate.setDate(startIndex)).getMonth()]!=months[new Date(endDate.setDate(endIndex)).getMonth()]) {
        month = months[new Date(startDate.setDate(startIndex)).getMonth()]+"-"+months[new Date(endDate.setDate(endIndex)).getMonth()];
    } else {
        month = months[d.getMonth()];
    };

    return({month: month, weekDates: weekDates});
}

export default SetWeek;
