import { AddCircleOutline } from "@mui/icons-material";
import { Card, CardContent, Grid, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import GetTask from "../../utilities/GetTask";
import PopupWindow from "./PopupWindow";

const WeekTable = ({year, month, weekDays}) => {
    const [open, setOpen] = useState(false);

    const [date, setDate] = useState([]);

    return (
        <Grid container item direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <Typography variant="h5">{month} &nbsp; {year}</Typography>
            </Grid>   
            <Grid container item direction="column" alignItems="center" justifyContent="center" spacing={1} sx={{mb: 2}}>                                
                {weekDays.map((weekDay) => (
                    <Grid container item key={weekDay.weekDate} direction="row" alignItems="center"> 
                        <Grid item xs={4.5} sm={2.2} md={1.5} lg={1.3}>                           
                            <Card align="center">
                                <CardContent>
                                    <Typography variant="body1" borderBottom={1}>
                                        {weekDay.weekDay}
                                    </Typography>
                                    <Typography variant="h5" border={1} borderRadius={"10%"} color={"white"} sx={{backgroundColor:"rgb(25, 118, 210)", maxWidth:40}}>
                                        {weekDay.weekDate}
                                    </Typography>
                                    <Typography variant="body2">
                                        {weekDay.weekMonth}
                                    </Typography>                                        
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={0.5} sm={0.5} md={0.5} lg={0.7}>                                
                            <IconButton onClick={() => {setDate([weekDay.weekDay, weekDay.weekDate, weekDay.weekMonth, year]);setOpen(true);}}>
                                <AddCircleOutline />
                            </IconButton>
                        </Grid>  
                        <Grid item xs={12} sm={12} md={10} lg={10}>
                            <GetTask date={[weekDay.weekDay, weekDay.weekDate, weekDay.weekMonth, year]} />
                        </Grid>                      
                    </Grid>
                ))}
            </Grid> 
            <PopupWindow open={open} onClose={() => setOpen(false)} date={date} />
        </Grid>
    );
}

export default WeekTable;