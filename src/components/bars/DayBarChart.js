import { Bar } from "react-chartjs-2";
import {chart as chartjs} from "chart.js/auto"
import {Chart} from 'chart.js';
import 'chartjs-adapter-luxon';

const DayBarChart = () => {
    return (
        <Bar height={"50%"}
            data={{
                labels:["John", "Jack"], 
                datasets:[{data: ["07:00","08:00"]}, { data: ["06:00","09:00"]}]
            }} 
            options={{
                indexAxis:"y", 
                y:{stacked:true}, 
                barThickness:10, 
                plugins:{legend:{display:false}}, 
                scales:{
                    x:{grid:{display:false}, 
                       type:"time",
                       min:"00:00",
                       max:"24:00",
                       time:{
                        unit:"minute"
                       }
                    }, 
                    y:{grid:{display:false}}
                }
            }}
         />
    );
}

export default DayBarChart;