import { Edit } from "@mui/icons-material";
import { Card, CardContent, IconButton, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import GetTask from "../../utilities/GetTask";
import PopupWindow from "../homePage/PopupWindow";
import CollapsibleTable from "./CollapsibleTable";

const WeekTable = ({year, month, weekDays}) => {
    const [open, setOpen] = useState(false);

    const [date, setDate] = useState([]);

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={3}>
                                <Typography variant="h5">
                                    {month} &nbsp; {year}
                                </Typography>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {weekDays.map((weekDay) => (
                        <React.Fragment key={weekDay.weekDate}>
                            <TableRow>
                                <TableCell size="small" width={"10%"}>
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
                                </TableCell>
                                <TableCell size="small" align="center" width={"5%"}>
                                    <IconButton onClick={() => {setDate([weekDay.weekDay, weekDay.weekDate, weekDay.weekMonth, year]);setOpen(true);}}>
                                        <Edit />
                                    </IconButton>    
                                </TableCell>  
                                <TableCell size="small" align="center">
                                    <GetTask date={[weekDay.weekDay, weekDay.weekDate, weekDay.weekMonth, year]} />    
                                </TableCell>  
                            </TableRow> 
                        </React.Fragment>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PopupWindow open={open} onClose={() => setOpen(false)} date={date} />
        </>
    );
}

export default WeekTable;