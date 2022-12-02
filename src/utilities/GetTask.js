import DayBarChart from "../components/bars/DayBarChart";

const GetTask = ({date}) => {
    let usersTasks=JSON.parse(localStorage.getItem("usersTasks")) || [];

    let dateIndex = usersTasks.findIndex((data) => data.date===date);

    let dayTasks = usersTasks[dateIndex];

    return (
        <DayBarChart dayTasks={dayTasks} />
    );
}

export default GetTask;