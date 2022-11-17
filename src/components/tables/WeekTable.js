import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

const WeekTable = ({year, month, weekDates}) => {
    const weekDays = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday", "Sunday"];

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
                <TableBody>
                    {weekDates.map((weekDate) => (
                        <TableRow key={weekDate}>
                            <TableCell colSpan={2}>{weekDate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default WeekTable;