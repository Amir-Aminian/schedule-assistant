const SetWeek = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let year;

    let month;

    let weekDates=[];

    let date = d.getDate()+1;

    let day = d.getDay();

    let startIndex = date-day;

    let endIndex = startIndex+6;

    let startDate = new Date(new Date(d).setDate(startIndex));

    let endDate = new Date(new Date(d).setDate(endIndex));

    if (startDate.getFullYear()!=endDate.getFullYear()) {
        year = startDate.getFullYear()+"-"+endDate.getFullYear();
    } else {
        year = d.getFullYear();
    };

    if (months[startDate.getMonth()]!=months[endDate.getMonth()]) {
        month = months[startDate.getMonth()]+"-"+months[endDate.getMonth()];
    } else {
        month = months[d.getMonth()];
    };

    for (let i = startIndex; i <= endIndex; i++) {
        let weekDate = new Date(d);
        weekDates.push(new Date(weekDate.setDate(i)).getDate());
    };
    
    return({year: year, month: month, weekDates: weekDates});
}

export default SetWeek;
