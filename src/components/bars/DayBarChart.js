import { Bar } from "react-chartjs-2";
import {chart as chartjs} from "chart.js/auto"

const DayBarChart = () => {
    return (
        <Bar data={{labels:[2016, 2017, 2018], datasets:[{data: [10,20,30]},{data: [15,20,40]}]}} options={{indexAxis: 'y', y:{stacked:true}, x:{stacked:true}}} />
    );
}

export default DayBarChart;