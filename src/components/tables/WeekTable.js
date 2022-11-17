import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const WeekTable = ({year, month, weekDays}) => {
    return (
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell align="center">
                            {month}
                        </TableCell>
                        <TableCell align="left">
                            {year}
                        </TableCell>
                    </TableRow>
                </TableHead>
                {weekDays.map((weekDay) => (
                    <TableBody key={weekDay.weekDate}>
                        <TableRow>
                            <TableCell colSpan={2}>{weekDay.weekDay}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>{weekDay.weekDate}</TableCell>
                        </TableRow>
                    </TableBody>
                ))}
                
            </Table>
        </TableContainer>
    );
}

export default WeekTable;