import { Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { width } from "@mui/system";

const WeekTable = ({year, month, weekDays}) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="right" sx={{fontSize:"20px", width:"50%"}}>
                            {month}
                        </TableCell>
                        <TableCell align="left" sx={{fontSize:"20px", width:"50%"}}>
                            {year}
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {weekDays.map((weekDay) => (
                        <TableRow key={weekDay.weekDate}>
                            <TableCell colSpan={2} align="center" size="small">
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
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default WeekTable;