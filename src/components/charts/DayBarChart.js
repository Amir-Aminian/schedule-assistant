import { Bar } from "react-chartjs-2";
import {chart as chartjs} from "chart.js/auto"
import {Chart} from 'chart.js';
import 'chartjs-adapter-luxon';
import { Box } from "@mui/material";

const DayBarChart = ({dayTasks}) => {
    const clickHandler = (e, element) => {
        if (element.length>0) {
            alert("Hello!")
        };
    };

    return (
        <Box>
            <Box>
                <Bar
                    data={{
                        datasets:
                            dayTasks.map((data) =>( 
                                {data:[{x:[data.task.startTime, data.task.endTime],y:data.user}], backgroundColor:data.color}
                            ))
                    }} 
                    options={{
                        onClick:(e, element) => clickHandler(e, element),
                        maintainAspectRatio:false,
                        indexAxis:"y",
                        borderSkipped:false,
                        borderRadius:"5", 
                        barPercentage:"0.2", 
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
            </Box>
        </Box>
    );
}

export default DayBarChart;