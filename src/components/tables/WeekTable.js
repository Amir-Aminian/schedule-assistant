import { Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";

const WeekTable = ({year, month, weekDates}) => {
    return (
        <TableContainer>
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>
                            {month}
                        </TableCell>
                        <TableCell>
                            {year}
                        </TableCell>
                    </TableRow>
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