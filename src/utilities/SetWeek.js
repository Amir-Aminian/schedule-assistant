const SetWeek = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let month = months[d.getMonth()];

    let date = d.getDate()+1;

    let startDate = new Date(d);

    let endDate = new Date(d);

    let startIndex = date-d.getDay();

    let endIndex = date-d.getDay()+6;

    return([new Date(startDate.setDate(startIndex)).getDate(), new Date(endDate.setDate(endIndex)).getDate(), month]);
}

export default SetWeek;
