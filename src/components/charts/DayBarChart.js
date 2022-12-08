import { Bar } from "react-chartjs-2";
import {chart as chartjs} from "chart.js/auto"
import {Chart} from 'chart.js';
import 'chartjs-adapter-luxon';

const DayBarChart = ({dayTasks}) => {
    const clickHandler = (e, element) => {
        if (element.length>0) {
            alert("Hello!")
        };
    };

    return (
        <Bar
            height={"50%"}
            data={{
                datasets:
                    dayTasks.map((data) =>( 
                        {data:[{x:[data.task.startTime, data.task.endTime],y:data.user}], backgroundColor:data.color}
                    ))
            }} 
            options={{
                onClick:(e, element) => clickHandler(e, element),
                indexAxis:"y",
                borderSkipped:false,
                borderWidth:"2",
                borderColor:"grey",
                borderRadius:"5", 
                barPercentage:"0.5", 
                plugins:{
                    legend:{display:false},
                    tooltip:{enabled:false}                    
                }, 
                scales:{
                    x:{
                        type:"time",
                        min:"00:00",
                        max:"24:00",
                        time:{
                            unit:"hour",
                            displayFormats:{hour:"ha"}
                       }
                    }, 
                    y:{
                        stacked:true,
                        grid:{display:false},
                        ticks:{
                            font:{size:"15%"}
                        }
                    }
                }
            }}
         />
    );
}

export default DayBarChart;