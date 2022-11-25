import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React, { useState } from "react";
import DayBarChart from "../bars/DayBarChart";
import PopupWindow from "../homePage/PopupWindow";
import CollapsibleTable from "./CollapsibleTable";

const WeekTable = ({year, month, weekDays}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell align="center" colSpan={2}>
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
                                <TableCell size="small" width={"10%"} sx={{border:"none"}}>
                                    <Card onClick={() => setOpen(true)} sx={{maxWidth:115}} align="center">
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
                                <TableCell size="small" align="left" sx={{border:"none"}}>
                                    <DayBarChart />    
                                </TableCell>  
                            </TableRow> 
                            <CollapsibleTable />
                        </React.Fragment>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <PopupWindow open={open} onClose={() => setOpen(false)} />
        </>
    );
}

export default WeekTable;