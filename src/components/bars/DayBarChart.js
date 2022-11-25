import { Line } from "react-chartjs-2";
import {chart as chartjs} from "chart.js/auto"
import {Chart} from 'chart.js';
import 'chartjs-adapter-luxon';

const DayBarChart = () => {
    return (
        <Line height={"50%"}
            data={{
                labels:["John", "Jack"], 
                datasets:[
                    {data:[{x:"10:00", y:"John"}, {x:"11:00", y:"John"}], backgroundColor:"orange"}, {data:[{x:"12:00", y:"Jack"}, {x:"13:00",y:"Jack"}], backgroundColor:"blue"}
                ]
            }} 
            options={{
                indexAxis:"y", 
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
                    y:{
                        grid:{display:false}
                    }
                },
                // parsing: {
                //     xAxisKey: 'data\\.x',
                //     yAxisKey: 'data\\.y'
                //   }
            }}
         />
    );
}

export default DayBarChart;