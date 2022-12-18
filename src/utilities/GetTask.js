import DayBarChart from "../components/charts/DayBarChart";

const GetTask = ({date}) => {
    let usersTasks=JSON.parse(localStorage.getItem("usersTasks")) || [];
    let dayTasks= [];

    usersTasks.forEach((data) => {
        if (data.date===new Date(date).getTime()) {
            dayTasks.push(data);
        }
    });

    return (
        <DayBarChart dayTasks={dayTasks} date={date} />
    );
}

export default GetTask;