import { Table } from "@mui/material";

const WeekTable = ({year, month, weekDates}) => {
    return (
        <Table>
            <h2>{year}</h2>
            <h2>{month}</h2>
            {weekDates.map((weekDate) => (
                 <h2 key={weekDate}>{weekDate}</h2>
            ))}
        </Table>
    );
}

export default WeekTable;