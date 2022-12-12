import { AddCircleOutline } from "@mui/icons-material";
import { Card, CardContent, Container, Grid, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import GetTask from "../../utilities/GetTask";
import PopupWindow from "../homePage/PopupWindow";
import CollapsibleTable from "./CollapsibleTable";

const WeekTable = ({year, month, weekDays}) => {
    const [open, setOpen] = useState(false);

    const [date, setDate] = useState([]);

    return (
        <Grid container item direction="column" alignItems="center" justifyContent="center" spacing={2}>
            <Grid item>
                <Typography variant="h5">{month} &nbsp; {year}</Typography>
            </Grid>   
            <Grid container item direction="column" alignItems="center" justifyContent="center" spacing={1}>                                
                {weekDays.map((weekDay) => (
                    <Grid container item key={weekDay.weekDate} direction="row" alignItems="center" justifyContent="center"> 
                        <Grid item>                           
                            <Card sx={{maxWidth:115}} align="center">
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
                        <Grid item>                                
                            <IconButton onClick={() => {setDate([weekDay.weekDay, weekDay.weekDate, weekDay.weekMonth, year]);setOpen(true);}}>
                                <AddCircleOutline />
                            </IconButton>
                        </Grid>  
                        <Grid item>
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