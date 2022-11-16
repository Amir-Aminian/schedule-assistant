import { Container, Table } from "@mui/material";

const WeekTable = ({year, month, weekDates}) => {
    return (
        <>
            <h2>{year}</h2>
            <h2>{month}</h2>
            {weekDates.map((weekDate) => (
                 <h2>{weekDate}</h2>
            ))}
        </>
    );
}

export default WeekTable;